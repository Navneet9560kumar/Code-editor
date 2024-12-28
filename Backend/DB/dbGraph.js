import mongoose from 'mongoose';
import { TrainData } from "../Utils/Train/TRAIN_DATA.js";  // Assuming you have this data.
import { StationGraph } from '../Models/Train.js'; // Mongoose model for Station Graph.

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://ruvishushukla1:KN9NBvgregS6myD3@irctc.pntil.mongodb.net/Train-Data?retryWrites=true&w=majority&appName=IRCTC", {
      serverSelectionTimeoutMS: 30000, 
    });
    console.log("✅ Connected to database successfully.");
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB:", error);
  }
};

// Function to build the station graph from the TrainData
async function buildStationGraph() {
  const graph = {}; // Store the graph as an in-memory object.

  // Iterate over each train data to update the graph
  TrainData.forEach(train => {
    // Extract the starting station and terminating station
    const startingStation = train.starting_station.code;
    const terminatingStation = train.terminating_station.code;
    
    // Get the list of intermediate stations
    const intermediateStations = train.intermediate_stations.map(station => station.code);

    // Combine all stations in the train route
    const allStations = [startingStation, ...intermediateStations, terminatingStation];

    // Loop through each station and its next station
    for (let i = 0; i < allStations.length - 1; i++) {
      const currentStation = allStations[i];
      const nextStation = allStations[i + 1];

      // Create a connection from the current station to the next station
      if (!graph[currentStation]) {
        graph[currentStation] = {
          station_code: currentStation,
          stations_connected: []
        };
      }

      // Check if the connection already exists
      let connection = graph[currentStation].stations_connected.find(conn => conn.station === nextStation);

      if (!connection) {
        // If no connection exists, create a new one
        connection = {
          station: nextStation,
          trains: [train.train_number],
          connection_count: 1
        };
        graph[currentStation].stations_connected.push(connection);
      } else {
        // If connection exists, update it
        connection.trains.push(train.train_number);
        connection.connection_count += 1;
      }
    }
  });

  // Save the graph to MongoDB
  for (const stationCode in graph) {
    const stationData = graph[stationCode];

    // Check if the station already exists in the database
    let stationRecord = await StationGraph.findOne({ station_code: stationCode });

    if (!stationRecord) {
      // If station doesn't exist, create a new record
      stationRecord = new StationGraph(stationData);
    } else {
      // Update existing station's connections
      stationRecord.stations_connected = stationData.stations_connected;
    }

    // Save the station record
    await stationRecord.save();
  }

  console.log('Station graph built and saved to MongoDB.');
}

// Connect to the database and build the graph
connectDB().then(() => {
  buildStationGraph();
});