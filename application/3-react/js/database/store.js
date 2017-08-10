
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import { choiceReducer } from './reducers.js';

const history = createBrowserHistory();

const reducers = combineReducers({
  choices: choiceReducer
  //, ...more reducers
});

const connectedReducers = connectRouter(history)(reducers);

const middleware = compose(
  applyMiddleware(
    routerMiddleware(history) // for dispatching history actions
    //, ... other middlewares ...
  )
);

const initialState = {choices: []};

const store = createStore(connectedReducers, initialState, middleware);

module.exports = { history, store };
