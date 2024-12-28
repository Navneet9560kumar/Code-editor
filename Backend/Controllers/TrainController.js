import { StationGraph, Train } from "../Models/Train.js";

async function findDirectConnections(fromStation, toStation) {
  try {
    const result = await Train.find({
      $and: [
        {
          $or: [
            { "starting_station.code": fromStation },
            { "intermediate_stations.code": fromStation }
          ]
        },
        {
          $or: [
            { "intermediate_stations.code": toStation },
            { "terminating_station.code": toStation }
          ]
        },
        {
          $or: [
            { "seat_availability.1AC.status": { $in: ["Available", "RAC"] } },
            { "seat_availability.2AC.status": { $in: ["Available", "RAC"] } },
            { "seat_availability.3AC.status": { $in: ["Available", "RAC"] } },
            { "seat_availability.SL.status": { $in: ["Available", "RAC"] } },
            { "seat_availability.GEN.status": { $in: ["Available", "RAC"] } }
          ]
        }
      ]
    });

    const finalResult = result.filter((train) => {
      if (train.starting_station.code === fromStation && train.terminating_station.code === toStation) {
        return true;
      }

      const intermediateStations = train.intermediate_stations;

      let From = null;
      let To = null;

      for (let i = 0; i < intermediateStations.length; i++) {
        if (intermediateStations[i].code === fromStation) {
          From = intermediateStations[i].stop;
        }
        if (intermediateStations[i].code === toStation) {
          To = intermediateStations[i].stop;
        }
      }

      if (!From || !To) return false;
      if (From < To) return true;

      return false;
    });

    return finalResult;
  } catch (error) {
    console.error("Error in findDirectConnections:", error);
    throw error; 
  }
}

async function findMultiTrainConnections(fromStation, toStation) {
  const visited = new Set();
  const queue = [[fromStation]];
  const allPaths = [];

  while (queue.length > 0) {
    const path = queue.shift();
    const currentStation = path[path.length - 1];

    if (currentStation === toStation) {
      allPaths.push(path);
      continue;
    }

    visited.add(currentStation);

    const stationData = await StationGraph.findOne({ station_code: currentStation });

    if (!stationData) continue;

    stationData.stations_connected.forEach((connection) => {
      if (!visited.has(connection.station)) {
        queue.push([...path, connection.station]);
      }
    });
  }

  const validPaths = allPaths.filter((path) => {
    const fromIndex = path.indexOf(fromStation);
    const toIndex = path.indexOf(toStation);
    return fromIndex < toIndex;
  });

  const completeTrainPaths = await Promise.all(
    validPaths.map(async (path) => {
      const trainsForCompleteJourney = [];
      let valid = true;

      for (let i = 0; i < path.length - 1; i++) {
        const currentStation = path[i];
        const nextStation = path[i + 1];

        const stationData = await StationGraph.findOne({ station_code: currentStation });
        if (!stationData) {
          valid = false;
          break;
        }

        const connection = stationData.stations_connected.find((conn) => conn.station === nextStation);

        if (connection) {
          const trainNumbers = connection.trains;

          const trains = await Train.find({
            $and: [
              { train_number: { $in: trainNumbers } },
              {
                $or: [
                  { "seat_availability.1AC.status": "Available" },
                  { "seat_availability.2AC.status": "Available" },
                  { "seat_availability.3AC.status": "Available" },
                  { "seat_availability.SL.status": "Available" },
                ],
              },
            ],
          });

          if (trains.length === 0) {
            valid = false;
            break;
          }

          trainsForCompleteJourney.push({
            from: currentStation,
            to: nextStation,
            trains,
          });
        } else {
          valid = false;
          break;
        }
      }

      if (!valid) return null;

      for (let i = 0; i < trainsForCompleteJourney.length - 1; i++) {
        const currentSegment = trainsForCompleteJourney[i];
        const nextSegment = trainsForCompleteJourney[i + 1];

        const validConnections = currentSegment.trains.filter((trainA) => {
          const arrivalTimeAtIntermediate = trainA.intermediate_stations.find(
            (station) => station.code === currentSegment.to
          )?.arrival_time;

          if (!arrivalTimeAtIntermediate) return false;

          return nextSegment.trains.some((trainB) => {
            const departureTimeFromIntermediate = trainB.intermediate_stations.find(
              (station) => station.code === nextSegment.from
            )?.departure_time;

            if (!departureTimeFromIntermediate) return false;

            return (
              new Date(`1970-01-01T${departureTimeFromIntermediate}`) >
              new Date(`1970-01-01T${arrivalTimeAtIntermediate}`)
            );
          });
        });

        if (validConnections.length === 0) return null;

        trainsForCompleteJourney[i].trains = validConnections;
      }

      return trainsForCompleteJourney;
    })
  );

  return completeTrainPaths.filter((path) => path !== null);
}



const searchTrains = async (req, res) => {
  const { fromStation, toStation } = req.body;

  if (!fromStation || !toStation) {
    return res.status(400).json({ success: false, message: "Source and Destination are required" });
  }

  try {
    const directTrains = await findDirectConnections(fromStation, toStation);
    
    const multiTrainConnections = await findMultiTrainConnections(fromStation, toStation);

    return res.status(200).json({
      success: true,
      result: {
        directTrains, 
       multiTrainConnections ,  
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default searchTrains;
