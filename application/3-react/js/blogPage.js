
import React from 'react';
import PropTypes from 'prop-types';

var BlogPage = ({ choices, onMakeChoice }) => {

  return (
    <div className="render-group">
      <h1>Blog Page</h1>
      <div className="choice-container">
        <button onClick={onMakeChoice}>Make a Choice</button>
      </div>
      <div className="results">{choices.length}</div>
    </div>
  );
};

BlogPage.propTypes = {
  onMakeChoice: PropTypes.func.isRequired,
  choices: PropTypes.array.isRequired
};

module.exports = BlogPage;