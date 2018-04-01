var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json"
    });
    var obj = {
        name: 'Long',
        lastName: 'Le',
        birth: '1987'
    };
    res.end(JSON.stringify(obj));
}).listen(8080);