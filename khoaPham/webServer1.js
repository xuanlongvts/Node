var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Long Lo <b>nono</b>');
}).listen(8080);