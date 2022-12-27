const express = require("express");
const authRoutes = express.Router();
const authController = require("../controllers/authController");
const loginLimiter = require("../middlewares/loginLimiter");

authRoutes.route("/")
    .post(loginLimiter, authController.login);

authRoutes.route("/refresh")
    .get(authController.refresh);

authRoutes.route("/logout")
    .post(authController.logout);

module.exports = authRoutes;
