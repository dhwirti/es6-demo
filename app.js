var express = require('express')
  , http = require('http')
  , bodyParser = require('body-parser')
  , DataStore = require('nedb')
  , app = express()
  , http_port = 3000
  , charactersDb = new DataStore({ filename: 'charactersDb.nedb' });

app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

// get all fucking characters
app.get('/characters', function (req, res) {
	charactersDb.find({}, function (err, docs) {
		res.send(docs);
	});
});

// get a character by the fucker id
app.get('/characters/:id', function (req, res) {
	charactersDb.findOne({ _id: req.params.id }, function (err, doc) {
		res.send(doc);
	});
});

// delete the motherfucking character
app.delete('/characters/:id', function (req, res) {
	charactersDb.remove({ _id: req.params.id }, {}, function (err, numRemoved) {
		res.statusCode = 200;
		res.send({ res: numRemoved });
	});
});

// add a fucking dumb ass character
app.post('/characters', function (req, res) {
	var character = req.body;
	charactersDb.insert(character, function (err, newDoc) {
		res.statusCode = 301;
		res.header('location', '/characters/' + newDoc._id).end();
	});
});

// update a motherfucker character
app.put('/characters/:id', function (req, res) {
	charactersDb.update({ _id: req.params.id }, req.body, {}, function (err, numReplaced) {
		res.statusCode = 200;
		res.send({ res: numReplaced });
	});
});

// runs the fucking app when the motherfucking database is fucking loaded
charactersDb.loadDatabase(function (err) {
	app.listen(http_port);
	console.log('Listening on motherfucker port ' + http_port);
});