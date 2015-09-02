import React, {Component} from 'react/addons';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import {LOAD_POSTS, LOAD_USERS, LOAD_COMMENTS} from 'actions/api';
import PostDetail from 'components/posts/PostDetail';

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
