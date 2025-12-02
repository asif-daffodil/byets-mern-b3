const express = require('express');
const { createUser, allUser } = require('../controllers/userController');
const router = express.Router();

router.get('/profile', (req, res) => {
    res.json({ message: 'User profile data' });
});

router.post('/register', createUser);

router.get('/all-users', allUser);

module.exports = router;