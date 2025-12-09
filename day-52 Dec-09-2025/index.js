const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/byetsb3');
const studentSchema = new mongoose.Schema({
    name: String,
    city: String
});

const Student = mongoose.model('Student', studentSchema);

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

app.post("/data", (req, res) => {
    const name = req.body.name;
    const city = req.body.city;
    res.send(`Hello ${name} from ${city}`);
})

app.post("/add-student", (req, res) => {
    const name = req.body.name;
    const city = req.body.city;
    const newStudent = new Student({ name, city });
    newStudent.save();
    res.send("Student added successfully");
})

app.get("/students", (req, res) => {
    Student.find().then(students => {
        res.json(students);
    });
})

app.put("/update-student/:id", (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const city = req.body.city;
    Student.findByIdAndUpdate(id, { name, city }).then(() => {
        res.send("Student updated successfully");
    });
})

app.delete("/delete-student/:id", (req, res) => {
    const id = req.params.id;
    Student.findByIdAndDelete(id).then(() => {
        res.send("Student deleted successfully");
    });
})

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
