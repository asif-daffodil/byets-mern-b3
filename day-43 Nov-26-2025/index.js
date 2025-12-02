const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const userRouter = require('./routes/userRouter');
app.use("/api/users", userRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on: http://localhost:${process.env.PORT}`);
});