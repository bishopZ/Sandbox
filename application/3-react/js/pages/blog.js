
import React from 'react';
import PropTypes from 'prop-types';

class BlogPage extends React.Component {
  componentWillMount(){
    if (!this.props.status.hasData) {
      this.props.onGetData();
    }
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
      var titles = data.articles.map((article, id)=>{
        return <h3 key={id}>{article.title}</h3>;
      });
      return (
        <div className="render-group">
          <h1>Blog Page</h1>
          {titles}
          <p>{data.articles.length} blog articles</p>
          <div className="choice-container">
            <button onClick={onMakeChoice}>Click Me!</button>
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