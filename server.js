const dbConnection = require("./config/db");
const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 8080;

//Database Connection
dbConnection();

app.use(express.json());
app.use(cors());

const studentsRouter = require("./routes/students");
app.use("/una", studentsRouter);

app.listen(PORT, () => console.log(`Server Started at Port ${PORT}`));
