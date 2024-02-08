const express = require("express");
const projectController = require("../controllers/projectController");

const router = express.Router();

router.get("/", projectController.getAllProjects);
router.post("/add-project", projectController.createProject);
router.put("/update-project", projectController.updateProject);
router.delete("/delete-project", projectController.deleteProject);


module.exports = router;
