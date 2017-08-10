
import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { history, store } from './store.js';

import HomeContainer from './homeContainer.js';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
        <div>
          <Route exact path="/" component={HomeContainer}/>
        </div>
      </Router>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('react-root')
);

console.log('%c App Started', 'color:green');
