'use strict';
var express = require('express');
var app = express();

app.use('/css', express.static(process.cwd() + '/css'));
app.use('/js', express.static(process.cwd() + '/js'));
app.use('/img', express.static(process.cwd() + '/img'));

app.get('/',function (req, res) {
			res.sendFile(process.cwd() + '/index.html');
		});

var port = process.env.PORT;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});