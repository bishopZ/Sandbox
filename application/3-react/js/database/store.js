
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import dataReducer from './dataReducer.js';
import statusReducer from './statusReducer.js';

const history = createBrowserHistory();

const reducers = combineReducers({
  data: dataReducer,
  status: statusReducer
  //, ...more reducers
});

const connectedReducers = connectRouter(history)(reducers);

const middleware = compose(
  applyMiddleware(
    routerMiddleware(history), // for dispatching history actions
    thunk // for ansychronous actions
    //, ... other middlewares ...
  )
);

const initialState = {};

const store = createStore(connectedReducers, initialState, middleware);

module.exports = { history, store };
