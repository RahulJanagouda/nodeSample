var fs = require("fs");

console.log("Starting..");
fs.writeFile("writtenFile.txt","Hello Node", function(error){
console.log("Writtetn File");
});
console.log("Finished");