import express from 'express';
import dotenv from 'dotenv'
import connectDB from './DB/dbConnect.js';
import TrainRoutes from './Routes/TrainRoutes.js'
import cors from 'cors'


dotenv.config();
connectDB();
const app = express();

const PORT = process.env.PORT || 5100;

const corsOptions = {
  origin: ['http://localhost:5173'], 
  methods: ['GET', 'POST'], 
};

app.use(cors(corsOptions)); 
app.use(express.json());

app.use("/api/trains", TrainRoutes);


app.listen(PORT , () => {
  console.log(`Server is running at : http://localhost:${PORT}`);
})
