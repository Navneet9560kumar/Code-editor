import express from 'express'
import searchTrains from '../Controllers/TrainController.js';

const TrainRoutes = express.Router();

TrainRoutes.post("/search-trains", searchTrains);

export default TrainRoutes