var fs = require('fs');

var data = fs.readFileSync('sample.txt');

console.log('Synchronous read 1: ' + data.toString());

console.log('Program ended 2');