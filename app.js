const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs
.command('add', 'Add a new note', {
  title: {
    describe: 'Title of the note',
    demand: true,
    alias: 't'
  },
    body: {
      describe: 'Body of the note',
      demand: true,
      alias: 'b'
    }
})
.help()
.argv;
var command = argv._[0];

var displayNote = (note) => {
  console.log(`---
  Title: ${note.title}
  Body: ${note.body}`);
}


if (command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
if(note){
  console.log(`Note created!`);
    displayNote(note);
} else {
  console.log("Title already taken.");
}
} else if (command === "list"){
  var listNotes = notes.getAll();
  console.log(`Printing ${listNotes.length} note(s) :
  `);
  listNotes.map((note) => displayNote(note));
}else if (command === "get"){
  var note = notes.getNote(argv.title);
  if(note){
    console.log(`Note found :
      ---
      Title: ${note.title}
      Body: ${note.body}`);
  } else {
    console.log("Note not found.");
  }
}else if (command === "remove"){
  if (notes.removeNote(argv.title)){
    console.log("Note removed.");
  } else {
    console.log("No such note.");
  }
}else {
  console.log("Command  ")
}
