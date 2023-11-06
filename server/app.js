const express = require("express");
// const taskRouter = require("./routes/taskRoutes.js");
const taskRouter = require("./routes/taskRoutes1");

let app = express();
// in built middleare to process incoming json data
app.use(express.json());
app.use("/app/v1/tasks", taskRouter);

module.exports = app;
