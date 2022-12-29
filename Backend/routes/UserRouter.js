const express = require("express");
const AdminModel = require("../Models/UserModel");
const UserController = require("../Controllers/UserController");

let router = express.Router();

router.post("/register", UserController.AddNewUser);

router.post("/login", UserController.GetUser);

router.delete("/delete/:id", UserController.DeleteUser);

router.put("/update/:id", UserController.UpdateUser);

// router.get("/GeneralCampigns/:id", UserController.ViewGeneralCampaigns);

module.exports = router;
