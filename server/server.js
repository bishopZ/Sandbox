
'use strict';

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const routes = require('./api-v1.js');
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

// Parse POST data
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// Create Session
server.use(session({
  store: new FileStore({}),
  resave: true,
  saveUninitialized: true,
  secret: 'your-secret-id'
}));

// create API routes
routes.createRoutes(server);

// static paths for the rest
server.get('/', express.static('./distribution/1-simple'));
server.use(express.static('./distribution'));

// Create the server
http.createServer(server).listen(port);

console.log('=================================');
console.log('  Server listening on port ' + port);
console.log('=================================');
