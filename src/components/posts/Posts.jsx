import React, {Component} from 'react/addons';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import {LOAD_POSTS, LOAD_USERS} from 'actions/api';
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
  }
  _renderPost(thePost) {
    let theUser = this._findByKey(this.props.users, 'id', thePost.userId);
    return (
      <PostDetail
        key={`postDetail_${thePost.id}`}
        post={thePost}
        user={theUser} />
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
    users: reducers.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadPosts: (opts) => LOAD_POSTS(opts)(dispatch),
    loadUsers: (opts) => LOAD_USERS(opts)(dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
