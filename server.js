// Simple express server
var express = require('express');
// Compression module to compress HTML, CSS, JS
var compression = require('compression');

var app = express();
app.use(compression());
app.use(express.static(__dirname + '/public-build'));
app.listen(4000);
console.log('Serving at localhost:4000');