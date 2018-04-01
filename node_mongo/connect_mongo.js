var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, function(err, data){
	if(err){
		console.log('Unable to connect to the mongoDB server. Error: ', err);
	}
	else{
		console.log('Connection established to: ', url);

		var collection = data.collection('zips');

		collection.find({'state': 'MA'}).toArray(
			function(err, result){
				if(err){
					console.log('err: ', err);
				}
				else if(result.length){
					console.log('result: ', result);
				}
				else{
					console.log('No document found');
				}

				db.close();
			}
		);
	}
});