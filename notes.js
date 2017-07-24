console.log('Starting notes.js.');

const fs = require('fs');

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };

  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch(e) {
    console.log("Initiated a new JSON file.");
  }

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length == 0) {
  notes.push(note); 
  var notesString = JSON.stringify(notes);
  fs.writeFileSync('notes-data.json', notesString);
  console.log('Successfully added: ', title);
} else {
  console.log("A note with the same title already exists.");
}
}

var getAll = () => {
  console.log("Getting all notes!");
}

var getNote = (title) => {
  console.log("Getting note ", title);
}

var removeNote = (title) => {
  console.log("Removed note ", title);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
