const express = require("express");
const taskController = require("../controllers/taskController");
const router = express.Router();

router.get("/", taskController.getAllTasks);
router.post("/add-task", taskController.createTask);
router.put("/update-task/:id", taskController.updateTask);
router.delete("/delete-task/:id", taskController.deleteTask);


module.exports = router;

