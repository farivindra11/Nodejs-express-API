const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const verify = require("../middleware/verify")

/* GET users listing. */
router.get("/", userController.getAll);
router.post("/register",verify.signUp, userController.createUser);
router.get("/:id_user", userController.getById);
router.put("/:id_user", userController.updateUser);
router.delete("/:id_user", userController.deleteUser)

module.exports = router;
