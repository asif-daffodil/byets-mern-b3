const express = require('express');
const { createToken } = require('../controller/authController');
const router = express.Router();

router.post('/login', createToken);

module.exports = router;