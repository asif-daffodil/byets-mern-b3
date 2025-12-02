const Student = require('../model/student');

const addStudent = async (req, res) => {
    const { name, email, gender, city } = req.body;
    const newStudent =  new Student({
        name, email, gender, city
    })
    await newStudent.save();
    res.status(201).json({ message: "Student added successfully", student: newStudent });
}

const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving students", error });
    }
}

const getStudentById = async (req, res) => {
    const { id } = req.params;
    try {
        const student = await Student.findById(id);
        if (!student) {
            throw new Error("Student not found");
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving student", error: error.message });
    }
}

const updateStudentById = async (req, res) => {
    const { id } = req.params;
    const { name, email, gender, city } = req.body;
    try {
        const updatedStudent = await Student.findByIdAndUpdate(id, { name, email, gender, city }, { new: true });
        if (!updatedStudent) {
            throw new Error("Student not found");
        }
        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(500).json({ message: "Error updating student", error: error.message });
    }
}

const deleteStudentById = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedStudent = await Student.findByIdAndDelete(id);
        if (!deletedStudent) {
            throw new Error("Student not found");
        }
        res.status(200).json({ message: "Student deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting student", error: error.message });
    }
}

module.exports = { addStudent, getAllStudents, getStudentById, updateStudentById, deleteStudentById };