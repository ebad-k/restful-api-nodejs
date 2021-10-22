const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  phone: {
    type: Number,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Student", studentSchema);
