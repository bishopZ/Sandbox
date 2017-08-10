
import React from 'react';
import PropTypes from 'prop-types';

var HomePage = ({ choices, onMakeChoice }) => {

  return (
    <div className="render-group">
      <h1>Home Page: Choices</h1>

      <div className="choice-container"><a href="#" onClick={onMakeChoice}><div className="choice">Make a Choice</div></a></div>

      <div className="results">{choices.length}</div>
    </div>
  );
};

HomePage.propTypes = {
  onMakeChoice: PropTypes.func.isRequired,
  choices: PropTypes.array.isRequired
};

module.exports = HomePage;