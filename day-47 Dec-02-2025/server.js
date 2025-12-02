const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
require('dotenv').config();

const mongoose = require('mongoose');
const mongoConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI).then(() => {
            console.log("MongoDB connection established");
        });
    }catch (error) {
        console.error("MongoDB connection failed:", error);
    }
} 
mongoConnect();

const commonURI = `/api/v${process.env.VERSION}`;

const studentRouter = require('./routes/studentRouter');
app.use(`${commonURI}/student`, studentRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on: http://localhost:${process.env.PORT}`);
});