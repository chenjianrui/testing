import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment } from 'actions';

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
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea onChange={this.handleChange} value={comment} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveComment: comment => dispatch(saveComment(comment))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CommentBox);
