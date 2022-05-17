const { application } = require("express");
const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const StudentRouter = require("./routers/student")

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

//register router
app.use(StudentRouter);



app.listen(port, () => {
    console.log("connection is setup at ${port}");
  })