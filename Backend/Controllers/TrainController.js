import { StationGraph, Train } from "../Models/Train.js";

async function findDirectConnections(fromStation, toStation) {
  try {
    const cursor = Train.find({
      "$and": [
        {
          "$or": [
            { "starting_station.code": fromStation },
            { "intermediate_stations.code": fromStation }
          ]
        },
        {
          "$or": [
            { "intermediate_stations.code": toStation },
            { "terminating_station.code": toStation }
          ]
        },
        {
          "$or": [
            { "seat_availability.1AC.status": "Available" },
            { "seat_availability.2AC.status": "Available" },
            { "seat_availability.3AC.status": "Available" },
            { "seat_availability.SL.status": "Available" },
            { "seat_availability.GEN.status": "Available" }
          ]
        }
      ]
    }).lean().cursor(); // Cursor for efficient loading

    let filteredTrains = [];

    for await (const train of cursor) { // Iterate through results
      let fromIndex = null;
      let toIndex = null;

      if (train.starting_station.code === fromStation && train.terminating_station.code === toStation) {
        filteredTrains.push(train);
      } else {
        train.intermediate_stations.forEach((station, index) => {
          if (station.code === fromStation) fromIndex = index;
          if (station.code === toStation) toIndex = index;
        });

        if (fromIndex !== null && toIndex !== null && fromIndex < toIndex) {
          filteredTrains.push(train);
        }
      }
    }

    return filteredTrains;
  } catch (error) {
    console.error("Error in findDirectConnections:", error);
    throw error;
  }
}

async function findMultiTrainConnections(fromStation, toStation) {
  try {
    const queue = [[fromStation]];
    const visited = new Set();
    const allPaths = [];
    let filteredTrainPaths = [];
    
    while (queue.length > 0) {
      const path = queue.shift();
      const currentStation = path[path.length - 1];

      if (currentStation === toStation) {
        allPaths.push(path);
        continue;
      }

      visited.add(currentStation);
      const stationData = await StationGraph.findOne({ station_code: currentStation }).lean();
      if (!stationData) continue;

      stationData.stations_connected.forEach(({ station }) => {
        if (!visited.has(station)) {
          queue.push([...path, station]);
        }
      });
    }

    const validPaths = allPaths.filter(path => path.indexOf(fromStation) < path.indexOf(toStation));

    for (const path of validPaths) {
      const journey = [];
      let valid = true;

      for (let i = 0; i < path.length - 1; i++) {
        const current = path[i];
        const next = path[i + 1];

        const stationData = await StationGraph.findOne({ station_code: current }).lean();
        if (!stationData) return null;

        const connection = stationData.stations_connected.find(conn => conn.station === next);
        if (!connection) return null;

        const trains = await Train.find({
          "train_number": { "$in": connection.trains },
          "$or": [
            { "seat_availability.1AC.status": "Available" },
            { "seat_availability.2AC.status": "Available" },
            { "seat_availability.3AC.status": "Available" },
            { "seat_availability.SL.status": "Available" }
          ]
        }).lean();

        if (trains.length === 0) {
          valid = false;
          break;
        }

        journey.push({ from: current, to: next, trains });
      }

      if (valid) {
        filteredTrainPaths.push(journey);
      }
    }

    return filteredTrainPaths;
  } catch (error) {
    console.error("Error in findMultiTrainConnections:", error);
    throw error;
  }
}

const searchTrains = async (req, res) => {
  const { fromStation, toStation } = req.body;

  if (!fromStation || !toStation) {
    return res.status(400).json({ success: false, message: "Source and Destination are required" });
  }

  try {
    const [directTrains, multiTrainConnections] = await Promise.all([
      findDirectConnections(fromStation, toStation),
      findMultiTrainConnections(fromStation, toStation)
    ]);

    return res.status(200).json({
      success: true,
      result: {
        directTrains,
        multiTrainConnections
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default searchTrains;