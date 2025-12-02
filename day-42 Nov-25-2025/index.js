const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require('dotenv').config();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
})

app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

app.get('/services', (req, res) => {
    const services = [
        { id: 1, name: 'Web Development', price: 1000 },
        { id: 2, name: 'Graphic Design', price: 800 },
        { id: 3, name: 'SEO Optimization', price: 600 }
    ];
    res.json(services);
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port http://localhost:${process.env.PORT}`);
})