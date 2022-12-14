const { Router } = require("express");
const usersRoutes = Router();
const usersController = require("../controllers/usersController");

usersRoutes.route("/")
    .get(usersController.getAllUsers)
    .post(usersController.createUser)
    .patch(usersController.updateUser)
    .delete(usersController.deleteUser);

module.exports = usersRoutes;
