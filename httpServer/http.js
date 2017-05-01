var http = require('http');

http.createServer(function(request, response){
	response.writeHead(200, {
		'Context-type': 'text/plain'
	});

	response.write('Your URL is: ' + request.url);

	response.end();

	console.log('Connected Successfull by NongNo');
}).listen(8080);