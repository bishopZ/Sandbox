
'use strict';

const express = require('express');
const app = express();
// const livereload = require('livereload');

var serverPort = process.env.PORT || 8080;

if (app.get('env') !== 'production') {
  app.use(require('connect-livereload')({
    port: 35729
  }));
}

app.use(express.static('./distribution'));

/* const server = */ app.listen(serverPort, () => {
  console.log('=================================');
  console.log('  Server listening on port ' + serverPort);
  console.log('=================================');
});
