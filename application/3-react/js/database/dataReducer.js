
import * as Actions from './actions.js';

const defaultState = {
  posts: []
};

const dataReducer = (state = defaultState, action) => {

  switch (action.type) { 
  case Actions.DATA_RECIEVED:
    return Object.assign({}, state, { posts: action.data });
  default: return state;
  } 

};

module.exports = dataReducer;
