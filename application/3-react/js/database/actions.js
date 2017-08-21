
var request = require('superagent');

// Example of storing data in the status property
var nextId = 0;

export const MAKE_CHOICE = 'MAKE_CHOICE';
export const onMakeChoice = () => ({
  type: MAKE_CHOICE,
  id: nextId++
});

// Example of accessing the API
export const DATA_REQUESTED = 'DATA_REQUESTED';
export const DATA_RECIEVED = 'DATA_RECIEVED';
export const onGetData = () => {
  return (dispatch) => { // dispatch provided by thunk middleware
    dispatch({
      type: DATA_REQUESTED
    });
    // send the API request
    request
      .get('/api/v1/articles')
      .set('X-API-Key', 'foobar')
      .end(function(error, response){
        dispatch({
          type: DATA_RECIEVED,
          data: response.body
        });
      });
  };
};
