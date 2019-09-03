import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
  renderCommentList = () => {
    return this.props.comments.map(comment => <li key={comment}>{comment}</li>);
  };

  render() {
    return (
      <div>
        <ul>{this.renderCommentList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

export default connect(mapStateToProps)(CommentList);
