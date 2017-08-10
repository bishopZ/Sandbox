
import { connect } from 'react-redux';
import { makeChoice } from './actions.js';

import HomePage from './homePage.js';

const getChoices = (choices) => {
  return choices;
};

const mapStateToProps = (state) => ({
  choices: getChoices(state.choices)
});

const mapDispatchToProps = {
  onMakeChoice: makeChoice
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export default HomeContainer;
