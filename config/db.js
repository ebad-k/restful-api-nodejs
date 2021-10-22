require("dotenv").config();
const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {});
    console.log("Database Connected");
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = dbConnection;
