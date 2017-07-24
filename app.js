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
if(note){
  console.log(`Note created :
    ---
    Title: ${note.title}
    Body: ${note.body}`);
} else {
  console.log("Title already taken.");
}
} else if (command === "list"){
  notes.getAll();
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
