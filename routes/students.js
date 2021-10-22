const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student.controller");
const { validate } = require("../validations/studentValidation");

//Create a new Student - POST Request
router
  .route("/student")
  .post(validate("createStudent"), studentController.createStudent);

//Get all Students Data - GET Request
router.route("/students").get(studentController.getStudents);

//Delete/Update/Get Single Student Data - PUT/GET/DELETE Requests
router
  .route("/student/:id")
  .get(studentController.getSingleStudent)
  .put(studentController.updateStudent)
  .delete(studentController.deleteStudent);

module.exports = router;
