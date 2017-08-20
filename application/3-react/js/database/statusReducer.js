
import * as Actions from './actions.js';

const defaultState = {
  hasData: false,
  isRequesting: false,
  count: 0
};

const statusReducer = (state = defaultState, action) => {

  console.log(action, state);

  // console.log(state,action);
  switch (action.type) { 
  case Actions.MAKE_CHOICE:
    return Object.assign({}, state, { count: ++state.count });
  case Actions.DATA_REQUESTED:
    return Object.assign({}, state, { isRequesting: true });
  case Actions.DATA_RECIEVED:
    return Object.assign({}, state, { isRequesting: false, hasData: true });
  default: return state; 
  } 
};

module.exports = statusReducer;
