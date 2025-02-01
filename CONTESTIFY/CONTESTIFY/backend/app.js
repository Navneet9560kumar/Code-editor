const express = require('express');
const cors  = require('cors');

const cookieParser = require('cookie-parser');

const app = express();


app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));  // Allow CORS for frontend
app.use(cookieParser());  // To parse cookies if needed

app.get('/', (req, res) => {
      res.send('Hello, World! The server is up and running.');
    });


    app.post('/api/login', (req, res) => {
      const { email, password } = req.body;
      
      if (email === 'test@example.com' && password === 'password123') {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    });

    const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});