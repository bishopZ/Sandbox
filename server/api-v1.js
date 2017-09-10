
const articles = require('./fakeData.js');

const api = {
  createRoutes: (server) => {

    

    // API Routes
    server.post('/api/v1/login', api.loginUser);
    server.get('/api/v1/articles', api.getArticles);

    // Admin API Routes
    server.post('/api/v1/admin/login', api.placeholder);

    server.get('/api/v1/admin/article/:id', api.authenticate, api.placeholder);
    server.post('/api/v1/admin/article/:id', api.authenticate, api.placeholder);
    server.put('/api/v1/admin/article/:id', api.authenticate, api.placeholder);
    server.delete('/api/v1/admin/article/:id', api.authenticate, api.placeholder);

  },
  loginUser: (req, res, next) => {
    var user = req.body;
    if (req.session.attempts > 10) {
      res.end('{ "success": false }');
    }
    else if (user.username === 'susan' && user.password === 'test') {
      req.session.user = user;
      res.end('{ "success": true }');
    } else {
      req.session.attempts = req.session.attempts || 0;
      req.session.attempts++;
      res.end('{ "success": false }');
    }
  },
  authenticate: (req, res, next) => {
    if (req.session.user) {
      next();
    } else {
      res.redirect('/login');
    }
  },
  getArticles: (req, res, next) => {
    // return the articles
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(articles, null, 3));
  },
  placeholder: (req, res, next) => {
    res.end('It worked!');
  }
}

module.exports = api;
