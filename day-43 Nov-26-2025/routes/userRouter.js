const express = require('express');
const router = express.Router();

router.get('/profile', (req, res) => {
    const userProfile = {
        name: "John Doe",
        email: "john.doe@example.com"
    };
    res.status(200).json(userProfile);
});

router.post('/login', (req, res) => {
    const {email, password} = req.body;
    res.status(200).json({message: `User logged in with email: ${email} & password: ${password}`});
});

router.get('/getData/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).json({message: `User data for user with ID: ${id}`});
});

router.get('/msg', (req, res) => {
    const { text } = req.query;
    res.status(200).json({message: `You sent the message: ${text}`});
});

router.get('/address{/:city}', (req, res) => {
    const city = req.params.city ?? 'Unknown';
    res.status(200).json({message: `User address in city: ${city}`});
});

module.exports = router;