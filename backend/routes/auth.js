const express = require("express");
const routes = express.Router();

const { registerUser } = require("../controllers/authController");

routes.route("/register").post(registerUser);

module.exports = routes;
