
var nextId = 0;

export const makeChoice = () => ({
  type: 'MAKE_CHOICE',
  id: nextId++
});
