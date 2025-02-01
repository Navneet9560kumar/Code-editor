const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// User Registration Route
router.post('/register', registerUser);

// User Login Route
router.post('/login', loginUser);

// Protected Route to get current user data
router.get('/me', authMiddleware, (req, res) => {
  res.json(req.user); // Return the current user's data
});

module.exports = router;
