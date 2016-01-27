//var h5bp = require('h5bp');
//var compression = require('compression');
//var express = require('express');
//var serveStatic = require('serve-static');
//
//var app = express();
//app.use(h5bp({ root: __dirname + '/public' }));
//
//// in order to serve files, you should add the two following middlewares
//app.use(compression());
//app.use(serveStatic(__dirname + '/public'))
//app.listen(3000);
//console.log('Server launched!');

// HTML5 Boilerplate
var h5bp = require('h5bp');

var app = h5bp.createServer({ root: __dirname + '/public' });
//app.listen(3000);
console.log('Serving at localhost:3000');