var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/gsclasses', function(err, db) {
	console.log("Connected correctly to server");
//------------------------------12*------------------------------//
//two ways of solvation: 1. using $where 2. using $nor

	// db.collection('posts').find({
	// 	$and:[{
	// 		$where: "this.tags.length > 5"
	// 		// $nor: [{tags: {$exists: false}}, {tags: {$size: 0}}, {tags: {$size: 1}}, {tags: {$size: 3}}, {tags: {$size: 4}}, {tags: {$size: 5}}, {tags: {$size: 2}}]
	// 	}, {
	// 		"published": true
	// 	}]
	// }).count(function(err, docs) {
	// if(err){
	// 	return console.log(err)
	// }
	// 	console.log(docs);
	// 	db.close();
	// })

//------------------------------14------------------------------//
	// 	db.collection('posts').updateMany({
	// 	"author.age": {$lt:21},
	// },{
	// 	$set:{"nick":"unauthorised"}
	// }, function(err) {
	// if(err){
	// 	return console.log(err)
	// }
	// 	console.log("success");
	// 	db.close();
	// })

//------------------------------15------------------------------//
	// db.collection('posts').updateMany({
	// 	"tags": {$elemMatch:{$eq: "adipisicing"}},
	// },{
	// 	$set:{"published":false}
	// }, function(err) {
	// if(err){
	// 	return console.log(err)
	// }
	// 	console.log("success");
	// 	db.close();
	// })

	// db.collection('posts').find({
	// 	$and: [{
	// 		"tags": {$all:["adipisicing"]}
	// 	},{
	// 		"published":false
	// 	}]
		
	// }).count(function(err, docs) {
	// if(err){
	// 	return console.log(err)
	// }
	// 	console.log(docs);
	// 	db.close();
	// })

//------------------------------16------------------------------//
	// db.collection('posts').updateMany({
	// 	"tags": {$all:[ "occaecat", "anim"]}
	// },{
	// 	$set:{"comments": []}
	// }, function(err) {
	// if(err){
	// 	return console.log(err)
	// }
	// 	console.log("success");
	// 	db.close();
	// })

	// 	db.collection('posts').find({
	// 	$and: [{
	// 		"tags": {$all:[ "occaecat", "anim"]}
	// 	},{
	// 		"comments":{$not:{$size: 0}}
	// 	}]
		
	// }).count(function(err, docs) {
	// if(err){
	// 	return console.log(err)
	// }
	// 	console.log(docs);
	// 	db.close();
	// })

//------------------------------17------------------------------//
	// db.collection('posts').find({
	// 	"comments":{$elemMatch: {"author.eyeColor": "blue"}}
	// }).count(function(err, docs) {
	// if(err){
	// 	return console.log(err)
	// }
	// 	console.log(docs);
	// 	db.close();
	// })

//------------------------------18------------------------------//
	db.collection('posts').find({
		$and:[{
			"comments":{$elemMatch: {"author.age": {$lt: 21}}}
		},{
			"comments":{$elemMatch: {"author.eyeColor": "green"}}
		}]
	}).count(function(err, docs) {
	if(err){
		return console.log(err)
	}
		console.log(docs);
		db.close();
	})

	// db.collection('posts').updateMany({
	// 	$and:[{
	// 		"comments":{$elemMatch: {"author.age": {$lt: 21}}}
	// 	},{
	// 		"comments":{$elemMatch: {"author.eyeColor": "green"}}
	// 	}]
	// },{
	// 	$set:{"comments": []}
	// }, function(err) {
	// if(err){
	// 	return console.log(err)
	// }
	// 	console.log("success");
	// 	db.close();
	// })


});


