const express = require('express');
const { uploadImage } = require('../controller/userController');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('User route is working');
});

router.post('/upload', uploadImage);

module.exports = router;