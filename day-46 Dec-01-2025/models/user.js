const mongoose = require('mongoose');
const { Schema } = mongoose;
var uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
    username: { 
        type: String, 
        required: [true, 'Username is required'],
        unique: [true, 'Username must be unique']
    },
    email: { 
        type: String, 
        required: [true, 'Email is required'],
        unique: [true, 'Email must be unique'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'] 
    },
    password: { 
        type: String, 
        required: [true, 'Password is required'],
        match: [/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/, 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character'] 
    },
    createdAt: { type: Date, default: Date.now }
});

userSchema.plugin(uniqueValidator, { message: '{PATH} must be unique' });
const user = mongoose.model('user', userSchema);
module.exports = user;