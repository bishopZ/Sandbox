
// Example of storing data in the status property
var nextId = 0;

export const MAKE_CHOICE = 'MAKE_CHOICE';
export const onMakeChoice = () => ({
  type: MAKE_CHOICE,
  id: nextId++
});


// Simulate requesting API data
const FakeData = [{}, {}, {}];

export const DATA_REQUESTED = 'DATA_REQUESTED';
export const DATA_RECIEVED = 'DATA_RECIEVED';
export const onGetData = () => {
  return (dispatch) => {
    dispatch({
      type: DATA_REQUESTED
    });
    // fake an API request
    setTimeout(()=>{
      // when it returns
      dispatch({
        type: DATA_RECIEVED,
        data: FakeData
      });
    }, 1000);
  };
};
