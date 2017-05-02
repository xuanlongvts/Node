var fs = require('fs');

console.log("Bat dau ghi Step 1");

var path = "sample.txt";
var content = "Chao Long Lo";

fs.writeFile(path, content, function(err){
	if(err){
		console.log('Error: ' + err);
	}
	else{
		console.log("Ghi thanh cong Step 2");
	}
});

console.log('Finish');