
import React from 'react';
import PropTypes from 'prop-types';

var AboutPage = ({ choices, onMakeChoice }) => {

  return (
    <div className="render-group">
      <h1>About Page</h1>
      <div className="choice-container">
        <button onClick={onMakeChoice}>Make a Choice</button>
      </div>
      <div className="results">{choices.length}</div>
    </div>
  );
};

AboutPage.propTypes = {
  onMakeChoice: PropTypes.func.isRequired,
  choices: PropTypes.array.isRequired
};

module.exports = AboutPage;