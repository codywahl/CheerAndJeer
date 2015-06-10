//Using express
var express = require('express');
var app = express();

//Defining GET route for /cheer.txt
app.get('/cheer.txt', function(request, response) {
	response.end('You have quite lovely eyes.');
});

//Defining GET route for /jeer.txt
app.get('/jeer.txt', function(request, response) {
	response.end('Your mother was indeed a hampster.');
});


//var server = app.listen(8080);  --Equivilant server listener, just without the .log message.
var server = app.listen(8080, function() {
	console.log('Listening on port 8080');
});