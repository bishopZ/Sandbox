
const bodyParser = require('body-parser');

const articles = require('./fakeData.js');

const api = {
  createRoutes: (server) => {

    // Parse POST data
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

    // API Routes
    server.post('/api/v1/login', (req, res, next) => {});
    server.get('/api/v1/articles', (req, res, next) => {
      // return the cards
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(articles, null, 3));
    });

    // Admin API Routes
    server.post('/api/v1/admin/login', (req, res, next) => {});
    server.get('/api/v1/admin/article/:id', (req, res, next) => {});
    server.post('/api/v1/admin/article/:id', (req, res, next) => {});
    server.put('/api/v1/admin/article/:id', (req, res, next) => {});
    server.delete('/api/v1/admin/article/:id', (req, res, next) => {});
  }
}

module.exports = api;
