const jwt = require('jsonwebtoken');

const createToken = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }else if(email !== 'kuddus@boyati.com' || password !== '123456'){
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    const userData = {
        id: 1,
        name: 'Kuddus Boyati',
        email: 'kuddus@boyati.com',
        gender: 'male',
        city: 'Barishal'
    }
    jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: '24h' }, (err, token) => {
        if (err) {
            return res.status(500).json({ message: 'Error generating token' });
        }
        res.status(200).json({ token });
    });
};

module.exports = { createToken };