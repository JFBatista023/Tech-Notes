const { Router } = require("express");
const usersRoutes = Router();
const usersController = require("../controllers/usersController");
const verifyJWT = require("../middlewares/verifyJWT");

usersRoutes.use(verifyJWT);

usersRoutes.route("/")
    .get(usersController.getAllUsers)
    .post(usersController.createUser)
    .patch(usersController.updateUser)
    .delete(usersController.deleteUser);

module.exports = usersRoutes;
