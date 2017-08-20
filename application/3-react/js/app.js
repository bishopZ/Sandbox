
import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import { Provider, connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { history, store } from './database/store.js';

import * as Actions from './database/actions.js';

import NavBar from './components/navbar.js';
import HomePage from './pages/home.js';
import AboutPage from './pages/about.js';
import BlogPage from './pages/blog.js';

// simple way to create pass-along redux containers
const defaultMapStateToProps = (a)=>(a); // give them everything
const defaultMapDispatchToProps = Actions; // give them everything
const container = (Page) => {
  return connect(
    defaultMapStateToProps, // which properties are sent to the page
    defaultMapDispatchToProps // which functions are sent to the page
  )(Page);
};

// render the router
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={container(HomePage)}/>
          <Route exact path="/about" component={container(AboutPage)}/>
          <Route exact path="/blog" component={container(BlogPage)}/>
        </div>
      </Router>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('react-root')
);

// it has begun
console.log('%c App Started', 'color:green');
