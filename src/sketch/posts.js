import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Panel} from 'react-bootstrap';
import {fetchActionCreator} from 'actions/fetchActionCreator';

// actions
const actions = {
  LOAD_POSTS: 'LOAD_POSTS',
  LOAD_POSTS_SUCCESS: 'LOAD_POSTS_SUCCESS',
  LOAD_USERS: 'LOAD_USERS',
  LOAD_USERS_SUCCESS: 'LOAD_USERS_SUCCESS',
  LOAD_COMMENTS: 'LOAD_COMMENTS',
  LOAD_COMMENTS_SUCCESS: 'LOAD_COMMENTS_SUCCESS',
  LOAD_BEGIN: 'LOAD_BEGIN',
  LOAD_COMPLETE: 'LOAD_COMPLETE'
};

// reducers
const initialPostsState = [];

export function posts(state = initialPostsState, action) {
  const {type} = action;
  switch (type) {
    case actions.LOAD_POSTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

const initialUsersState = [];

export function users(state = initialUsersState, action) {
  const {type} = action;
  switch (type) {
    case actions.LOAD_USERS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

const initialCommentsState = [];

export function comments(state = initialCommentsState, action) {
  const {type} = action;
  switch (type) {
    case actions.LOAD_COMMENTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

// Posts component
class Posts extends Component {
  displayName = 'Posts component'
  componentWillMount() {
    if (this.props.loadPosts) {
      this.props.loadPosts();
    }
    if (this.props.loadUsers) {
      this.props.loadUsers();
    }
    // if (this.props.loadComments) {
    //   this.props.loadComments();
    // }
  }
  _renderPost(thePost) {
    let theUser = this._findByKey(this.props.users, 'id', thePost.userId);
    let theComments = this.props.comments.filter((item) => item.postId === thePost.id);
    return (
      <PostDetail
        key={`postDetail_${thePost.id}`}
        post={thePost}
        user={theUser}
        comments={theComments} />
    );
  }
  _findByKey(col, key, id) {
    if (!col.length) {
      return null;
    }
    let findById = (item) => item[key] === id;
    let found = col.filter(findById);
    return found.length ? found[0] : null;
  }
  render() {
    const thePosts = this.props.posts;
    return (
      <Row>
        <Col xs={8}>
          <h1>POSTS</h1>
          {thePosts.map((p)=>::this._renderPost(p))}
        </Col>
      </Row>
    );
  }
}

let LOAD_POSTS = fetchActionCreator({
  url: 'http://jsonplaceholder.typicode.com/posts',
  type: actions.LOAD_POSTS,
  cache: true,
  beginAction: actions.LOAD_BEGIN,
  completeAction: actions.LOAD_COMPLETE
});

let LOAD_USERS = fetchActionCreator({
  url: 'http://jsonplaceholder.typicode.com/users',
  type: actions.LOAD_USERS,
  cache: true,
  beginAction: actions.LOAD_BEGIN,
  completeAction: actions.LOAD_COMPLETE
});

let LOAD_COMMENTS = fetchActionCreator({
  url: 'http://jsonplaceholder.typicode.com/comments',
  type: actions.LOAD_COMMENTS,
  cache: true,
  beginAction: actions.LOAD_BEGIN,
  completeAction: actions.LOAD_COMPLETE
});

function mapStateToProps(reducers) {
  return {
    posts: reducers.posts,
    users: reducers.users,
    comments: reducers.comments
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadPosts: (opts) => LOAD_POSTS(opts)(dispatch),
    loadUsers: (opts) => LOAD_USERS(opts)(dispatch),
    loadComments: (opts) => LOAD_COMMENTS(opts)(dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

// PostDetail component
class PostDetail extends Component {
  displayName = 'PostDetail component'
  _renderTitle(post) {
    return (
      <a href={`#/posts/${post.id}`}>
        {post.title}
      </a>
    );
  }
  render() {
    const thePost = this.props.post;
    let theUser = this.props.user || {};
    return (
      <Panel header={this._renderTitle(thePost)}
        bsStyle="info">
          {thePost.body}
          <hr />
          {`-- ${theUser.name}`}
      </Panel>
    );
  }
}
