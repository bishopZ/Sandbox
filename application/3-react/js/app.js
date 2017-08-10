
import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { history, store } from './database/store.js';

import NavBar from './navbar.js';
import { HomeContainer, AboutContainer, BlogContainer } from './database/container.js';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={HomeContainer}/>
          <Route exact path="/about" component={AboutContainer}/>
          <Route exact path="/blog" component={BlogContainer}/>
        </div>
      </Router>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('react-root')
);

console.log('%c App Started', 'color:green');
