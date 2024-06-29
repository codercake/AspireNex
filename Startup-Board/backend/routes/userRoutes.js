const express = require('express');
const { signup, login, getUserProfile } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile', protect, getUserProfile);

module.exports = router;
