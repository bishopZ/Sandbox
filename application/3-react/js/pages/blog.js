
import React from 'react';
import PropTypes from 'prop-types';

class BlogPage extends React.Component {
  componentWillMount(){
    this.props.onGetData();
  }
  render(){

    var {status, data, onMakeChoice} = this.props;

    if (status.isRequesting) {
      return (
        <div className="render-group">
          <h1>requesting blog data</h1>
        </div>
      );
    }

    if (status.hasData) {
      return (
        <div className="render-group">
          <h1>Blog Page</h1>
          <p>{data.posts.length} blog articles</p>
          <div className="choice-container">
            <button onClick={onMakeChoice}>Make a Choice</button>
          </div>
          <div className="results">{status.count}</div>
        </div>
      );
    }

    return (
      <div className="render-group">
        <h1>waiting for data request</h1>
      </div>
    );
  }
}

BlogPage.propTypes = {
  onGetData: PropTypes.func.isRequired,
  onMakeChoice: PropTypes.func.isRequired,
  status: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

module.exports = BlogPage;