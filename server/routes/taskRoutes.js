const express = require("express");
const tasks = require("../data.js");
//router instance
let router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      tasks,
    },
  });
});

router.post("/", (req, res) => {
  //res.send("post tasks")
  //   console.log(req.body);

  let task = req.body.task;
  tasks.push({ id: tasks.length + 1, task: task });
  res.status(201).json({
    status: "success",
    data: {
      tasks,
    },
  });
});
router.get("/:id", (req, res) => {
  // console.log(req.params.id);// type of--> string, if you want number (+req.params.id)
  const id = +req.params.id;
  const taskIndex = tasks.findIndex((task) => task.id === id);
  // console.log(taskIndex);
  if (taskIndex > -1) {
    let task = tasks[taskIndex];
    res.status(200).json({
      status: "success",
      data: {
        task,
      },
    });
  } else {
    let task = tasks[taskIndex];
    res.status(200).json({
      status: "success",
      message: "ther is no task with this id",
    });
  }
});
router.patch("/:id", (req, res) => {
  let id = req.params.id;
  let task = tasks.find((task) => task.id == id);
  task["task"] = req.body.task;
  console.log(req.body.task);
  res.json(task);
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  let taskIndex = tasks.findIndex((task) => task.id == id);
  if (taskIndex > -1) {
    tasks.splice(taskIndex, 1);
    res.json({
      message: "task deleted successfully",
    });
  }
});
module.exports = router;
