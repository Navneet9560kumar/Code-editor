const express = require('express');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const dotenv = require('./config/dotenv');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(cookieParser());
app.use(express.json()); // For parsing application/json

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
