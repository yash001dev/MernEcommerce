const express = require("express");
const routes = express.Router();

const { registerUser, loginUser } = require("../controllers/authController");
const router = require("./product");

routes.route("/register").post(registerUser);
router.route("/login").post(loginUser);

module.exports = routes;
