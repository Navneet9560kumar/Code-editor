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
  origin: ['https://train-ticket-rvn.vercel.app'], 
  methods: ['GET', 'POST'], 
  credentials: true,
};

app.use(cors(corsOptions)); 
app.use(express.json());

app.get("/" , (req , res) => {
res.send("Hello Ji ......");
}

app.use("/api/trains", TrainRoutes);


app.listen(PORT , () => {
  console.log(`Server is running at : http://localhost:${PORT}`);
})
