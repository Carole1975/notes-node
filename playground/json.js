// var obj = {
//   name: "Bob"
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
//
var personString = '{"name": "Bob", "age": 34}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log("Your name is: ", person.name);
console.log("Your age is: ", person.age);
