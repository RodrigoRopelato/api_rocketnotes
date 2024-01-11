const { Router } = require("express");

const NotesController = require("../controllers/NotesController.js");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const notesController = new NotesController();

const notesRoutes = Router();

notesRoutes.use(ensureAuthenticated);

notesRoutes.post("/", notesController.create);
notesRoutes.get("/:id",notesController.show);
notesRoutes.delete("/:id",notesController.delete);
notesRoutes.get("/",notesController.index);


module.exports = notesRoutes;