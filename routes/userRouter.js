const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.getAllUsers);
router.post("/add-user", userController.createUser);
router.post("/get-user", userController.connectUser);


module.exports = router;