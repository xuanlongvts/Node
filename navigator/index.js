var http = require('http');
var fs = require('fs');
var port = 8080, host = '127.0.0.1';

var server = http.createServer(function(request, response){
	var urlRequest = request.url;
	console.log('Received request: ', urlRequest);

	var filePath = "./public" + urlRequest;

	fs.readFile(filePath, function(err, data){
		if(err){
			response.writeHead(400, {
				"Context-type": "text/plain; charset=utf-8"
			});

			response.end('Sorry, The page not found');
		}
		else{
			response.writeHead(200, {
				"Context-type": "text/html; charset=utf-8"
			});

			response.write(data);
			response.end();
		}
	});
});

server.listen(port, host, function(){
	var address = server.address();
	console.log("opened server on %j", address);
});