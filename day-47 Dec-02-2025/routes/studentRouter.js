const express = require('express');
const { addStudent, getAllStudents, getStudentById, updateStudentById, deleteStudentById } = require('../controllers/studentController');
const router = express.Router();

router.post("/add", addStudent);
router.get("/all", getAllStudents);
router.get("/:id", getStudentById);
router.put("/:id", updateStudentById);
router.delete("/:id", deleteStudentById);

module.exports = router;