
import React from 'react';
import PropTypes from 'prop-types';

var AboutPage = ({ status, onMakeChoice }) => {

  return (
    <div className="render-group">
      <h1>About Page</h1>
      <div className="choice-container">
        <button onClick={onMakeChoice}>Click Me!</button>
      </div>
      <div className="results">{status.count}</div>
    </div>
  );
};

AboutPage.propTypes = {
  onMakeChoice: PropTypes.func.isRequired,
  status: PropTypes.object.isRequired
};

module.exports = AboutPage;