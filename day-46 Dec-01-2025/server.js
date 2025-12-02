const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
require('dotenv').config();
const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI;
const mongoConnect = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};
mongoConnect();


const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// Make public folder static
app.use(express.static('public'));

const apiPath = `/api/v${process.env.VERSION}`;

const userRouter = require('./routes/userRouter');
app.use(`${apiPath}/user`, userRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on: http://localhost:${process.env.PORT}`);
});