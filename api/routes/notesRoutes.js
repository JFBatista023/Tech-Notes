const express = require("express");
const notesRoutes = express.Router();
const notesController = require("../controllers/notesController");
const verifyJWT = require("../middlewares/verifyJWT");

notesRoutes.use(verifyJWT);

notesRoutes.route("/")
    .get(notesController.getAllNotes)
    .post(notesController.createNewNote)
    .patch(notesController.updateNote)
    .delete(notesController.deleteNote);

module.exports = notesRoutes;
