console.log('Starting notes.js.');

var addNote = (title, body) => {
  console.log("Adding note ", title, body);
}

var getAll = () => {
  console.log("Getting all notes!");
}

var get = (title) => {
  console.log("Getting note ", title);
}

var remove = (title) => {
  console.log("Removed note ", title);
}

module.exports = {
  addNote,
  getAll,
  get,
  remove
}
