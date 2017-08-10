
import React from 'react';
import PropTypes from 'prop-types';

var HomePage = ({ choices, onMakeChoice }) => {

  return (
    <div className="render-group">
      <h1>Home Page</h1>
      <div className="choice-container">
        <button onClick={onMakeChoice}>Make a Choice</button>
      </div>
      <div className="results">{choices.length}</div>
    </div>
  );
};

HomePage.propTypes = {
  onMakeChoice: PropTypes.func.isRequired,
  choices: PropTypes.array.isRequired
};

module.exports = HomePage;