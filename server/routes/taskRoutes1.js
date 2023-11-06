const express = require("express");

const router = express.Router();
const Task = require("../models/Task.js");

router.get("/", async (req, res) => {
  try {
    let tasks = await Task.find();
    res.status(200).json({
      status: "success",
      data: {
        tasks,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "error.message",
    });
  }
});
router.post("/", async (req, res) => {
  try {
    //creating new instance of data and saving into db
    // const newTask = new Task({
    //   task: req.body.task,
    // });
    // newTask.save();
    //this method creates the instance by itself and saves the data into db
    const newTask = await Task.create({
      task: req.body.task,
    });
    res.status(201).json({
      status: "success",
      data: {
        newTask,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "error.message",
    });
  }
});
router.get("/:id", async (req, res) => {
  try {
    let task = await Task.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "error.message",
    });
  }
});
router.patch("/:id", async (req, res) => {
  try {
    // let task = await Task.findByIdAndUpdate(req.params.id,req.body);
    const { task } = req.body;
    let updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      {
        task: task,
      },
      { new: true }
    );

    res.status(200).json({
      status: "success",
      data: {
        updatedTask,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "error.message",
    });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    let task = await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: null, // (or) message:"succcessfully deleted"
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "error.message",
    });
  }
});
module.exports = router;
