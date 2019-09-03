import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment, fetchComments } from 'actions';

class CommentBox extends Component {
  state = {
    comment: ''
  };

  handleChange = e => {
    this.setState({
      comment: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({
      comment: ''
    });
  };

  render() {
    const { comment } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea onChange={this.handleChange} value={comment} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button onClick={this.props.fetchComments}>Submit Fetch</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveComment: comment => dispatch(saveComment(comment)),
    fetchComments: () => dispatch(fetchComments())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CommentBox);
