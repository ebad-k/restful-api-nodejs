const Student = require("../models/student.model");
const { validationResult } = require("express-validator");

//Creating a Student
const createStudent = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, rollNo, degree } = req.body;
    let check = await Student.findOne({ email: email });

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }
    if (check === null) {
      const student = await Student.create({
        firstName,
        lastName,
        email,
        phone,
        rollNo,
        degree,
      });
      res.status(201).json(student);
    } else {
      return res.json({ message: "Student Already Exists" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// //Getting All Students
const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    if(students == ''){
      return res.json("There are no students");
    }
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a Single Student
const updateStudent = async (req, res) => {
  try {
    let student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Cannot find student" });
    } else {
      const updatedStudent = await Student.updateOne(
        { _id: req.params.id },
        req.body
      );
      res.status(200).json(updatedStudent);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
    return;
  }
};

//Get a Single Student
const getSingleStudent = async (req, res) => {
  try {
    let student = await Student.findById(req.params.id);
    if (!student) {
      res.status(404).json({ message: "Cannot find student" });
      return;
    }
    res.status(200).json({ student });
  } catch (err) {
    res.status(500).json({ message: err.message });
    return;
  }
};

// //Delete a Student
const deleteStudent = async (req, res) => {
  try {
    let student = await Student.findById(req.params.id);
    if (!student) {
      res.status(404).json({ message: "Cannot find student" });
      return;
    }
    const removedStudent = await Student.deleteOne({ _id: req.params.id });
    res.status(200).json(removedStudent);
  } catch (err) {
    res.status(500).json({ message: err.message });
    return;
  }
};

module.exports = {
  createStudent,
  getStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
