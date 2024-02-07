const express = require("express");
const taskController = require("../controllers/taskController");
const projectController = require("../controllers/projectController");

const router = express.Router();
router.get("/", projectController.getAllProjects);
router.post("/add-project", projectController.createProject);
router.put("/update-project", projectController.updateProject);
router.delete("/delete-project", projectController.deleteProject);



router.get("/", taskController.getAllTasks);
router.post("/add-task", taskController.createTask);
router.put("/update-task", taskController.updateTask);
router.delete("/delete-task", taskController.deleteTask);


module.exports = router;
