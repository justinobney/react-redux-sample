import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import {fetchActionCreator} from 'actions/fetchActionCreator';

const initialState = [];

const actions = {
  LOAD_POSTS: 'LOAD_POSTS',
  LOAD_POSTS_SUCCESS: 'LOAD_POSTS_SUCCESS',
  LOAD_COMPLETE: 'LOAD_COMPLETE'
}

let LOAD_POSTS = fetchActionCreator({
  url: 'http://jsonplaceholder.typicode.com/posts',
  type: actions.LOAD_POSTS,
  completeAction: actions.LOAD_COMPLETE
});

function mapStateToProps(reducers) {
  return {posts: reducers.posts};
}

function mapDispatchToProps(dispatch) {
  return {
    loadPosts: LOAD_POSTS()(dispatch)
  };
}

export function posts(state = initialState, action) {
  const {type} = action;
  switch (type) {
    case actions.LOAD_POSTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

class Posts extends Component {
  displayName = 'Posts component'
  componentWillMount() {
    if (this.props.loadPosts) {
      this.props.loadPosts();
    }
  }
  render() {
    const thePosts = this.props.posts;
    return (
      <Row>
        <Col xs={12}>
          <h1>POSTS</h1>
          <ul>
            {thePosts.map((p)=><li>{p.title}</li>)}
          </ul>
        </Col>
      </Row>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
