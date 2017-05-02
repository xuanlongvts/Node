var fs = require('fs');

fs.readFile('sample.txt', function(err, data){
	if(err){
		return console.error(err);
	}

	console.log("Lenh 1: " + data.toString());
});

console.log("Lenh 2");