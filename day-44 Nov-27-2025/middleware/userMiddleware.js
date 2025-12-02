const jwt = require('jsonwebtoken');

const checkAge = (req, res, next) => {
    const { age } = req.query;
    if (!age) {
        return res.status(400).json({ message: 'Age is required' });
    }else if(isNaN(age) || age < 0){
        return res.status(400).json({ message: 'Age must be a valid non-negative number' });
    }else if (age < 18) {
        return res.status(403).json({ message: 'Access denied. You must be at least 18 years old.' });
    }else{
        next();
    }
};

const checkCity = (req, res, next) => {
    const { city } = req.query;
    if (!city) {
        return res.status(400).json({ message: 'City is required' });
    } else if (city.toLowerCase() !== 'barishal') {
        return res.status(403).json({ message: 'Access denied. You must be from Barishal.' });
    } else {
        next();
    }
};

const checkAuth = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ message: 'Authorization header is missing' });
    }
    const token = authorization.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid or expired token' });
        }
        req.user = decoded;
        next();
    });
};

module.exports = {checkAge, checkCity, checkAuth}