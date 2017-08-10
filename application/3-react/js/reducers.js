
const choiceReducer = (state = [], action) => { 
  switch (action.type) { 
  case 'MAKE_CHOICE': return [ ...state, { id: action.id } ]; // or whatever...
  default: return state; 
  } 
};

module.exports = { choiceReducer };
