const express = require("express");
const routes = express.Router();

const {
  registerUser,
  loginUser,
  logout,
} = require("../controllers/authController");
const router = require("./product");

routes.route("/register").post(registerUser);
router.route("/login").post(loginUser);

router.route("/logout").get(logout);

module.exports = routes;
