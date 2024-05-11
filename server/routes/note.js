const express = require("express");
const router = express.Router();

const noteController = require("../controllers/note");

router.get("/", noteController.getAllNotes);
router.post("/createNote", noteController.createNote);

module.exports = router;
