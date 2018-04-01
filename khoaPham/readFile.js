var fs = require('fs');
var content = fs.readFileSync(__dirname + '/danhSach.txt');

console.log('buffer: ', content);
console.log('content: ', content.toString());