
'use strict';

const express = require('express');
const http = require('http');

const server = express();

// Development Server Options

const isDev = process.env.NODE_ENV !== 'production';
const env  = isDev ? 'development' : process.env.NODE_ENV;
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';

server.set('env', env);
server.set('host', host); 
server.set('port', port);

if (isDev) {
  server.use(require('connect-livereload')({ port: 35729 }));
}

// Production Server Options

// static paths for the rest
server.use(express.static('./distribution'));

// Create the server
http.createServer(server).listen(port);

console.log('=================================');
console.log('  Server listening on port ' + port);
console.log('=================================');
