const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        match: [/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email format"]
    },
    gender: {
        type: String,
        enum: {
            values: ['Male', 'Female', 'Other'],
            message: "Gender must be Male, Female, or Other"
        },
        required: [true, "Please select a gender"]
    },
    city: {
        type: String,
        required: [true, "City is required"]
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;