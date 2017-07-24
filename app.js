console.log("Starting app.js.");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log("Command: ", command);
console.log("Yargs: ", argv);


if (command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  note == undefined? console.log("A note with the same title already exists."):console.log("Successfully added note ", note.title);
} else if (command === "list"){
  notes.getAll();
}else if (command === "get"){
  notes.getNote(argv.title);
}else if (command === "remove"){
  notes.removeNote(argv.title);
}else {
  console.log("Command  ")
}
