const fs = require('fs');

// var obj = {
//   name: "Bob"
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
//
// var personString = '{"name": "Bob", "age": 34}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log("Your name is: ", person.name);
// console.log("Your age is: ", person.age);

var originalNote = {
  title: "Titre de ma premiere note",
  body: "Blablabla blablabla"
}

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
