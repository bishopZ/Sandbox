
import { connect } from 'react-redux';
import { makeChoice } from './actions.js';

import HomePage from '../homePage.js';
import AboutPage from '../aboutPage.js';
import BlogPage from '../blogPage.js';

const getChoices = (choices) => {
  console.log(1);
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

const AboutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutPage);

const BlogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPage);

module.exports = { HomeContainer, AboutContainer, BlogContainer };
