var fs = require("fs");

console.log("Starting..");

var contetns = fs.readFileSync("config.json");

console.log("Contetns: " + contetns);
// console.log("Carry on..");

var config = JSON.parse(contetns);
console.log("Config: " + config);
console.log("Username: " + config.username);