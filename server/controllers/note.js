const Note = require("../models/Note");

exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};

exports.createNote = async (req, res) => {
  try {
    const note = new Note({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });
    await note.save();
    res.status(201).json(note);
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};
