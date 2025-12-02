const express = require('express');
const { checkAge, checkCity, checkAuth } = require('../middleware/userMiddleware');
const { userProfile } = require('../controller/userController');
const router = express.Router();

router.get('/profile', checkAuth, checkAge, checkCity, userProfile);

module.exports = router;