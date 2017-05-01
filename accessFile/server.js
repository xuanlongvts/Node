var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
	if(request.url === '/about.html'){
		response.setHeader("Context-type", "text/html");
		response.setHeader("author", "NongNo");
		response.setHeader("email", "xuanlongvts@gmail.com");

		response.writeHead(200, {
			"github": "xuanlongvts"
		});

		fs.createReadStream('./about.html').pipe(response);
	}
	else{
		response.writeHead(404, {
			"Context-type": "text/plain",
			"author": "NongNo",
			"github": "xuanlongvts"
		});

		response.write("404 not found " + request.url);

		response.end();
	}
});

server.listen(3000, function(){
	console.log('connect success');
});