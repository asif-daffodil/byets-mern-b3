const user = require('../models/user');
const bcrypt = require('bcrypt');
const createUser = (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 9);
    const newUser = new user({ username, email, password: hashedPassword });
    
    newUser.save()
        .then(savedUser => {
            res.status(201).json({ message: 'User created successfully', user: savedUser });
        })
        .catch(err => {
            res.status(500).json({ errors: err.errors });
        });
}

const allUser = (req, res) => {
    user.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json({ errors: err.errors });
        });
}

module.exports = { createUser, allUser };