import React, {Component} from 'react/addons';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import {LOAD_POSTS, LOAD_USERS} from 'actions/api';
import {api} from 'actions/apiMiddleware';
import PostDetail from 'components/posts/PostDetail';

// Posts component
class Posts extends Component {
  displayName = 'Posts component'
  componentWillMount() {
    this.props.api.fetch(LOAD_POSTS);
    this.props.api.fetch(LOAD_USERS);
  }
  _renderPost(post) {
    let user = findByKey(this.props.users, 'id', post.userId);
    return (
      <PostDetail key={`postDetail_${post.id}`}
        post={post} user={user} />
    );
  }
  render() {
    const thePosts = this.props.posts;
    return (
      <Row>
        <Col xs={8}>
          <h1>POSTS</h1>
          {thePosts.slice(0, 10).map((p)=>::this._renderPost(p))}
        </Col>
      </Row>
    );
  }
}

Posts.propTypes = {
  api: React.PropTypes.shape({
    fetch: React.PropTypes.func
  }),
  users: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  posts: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

Posts.defaultProps = {
  api: {fetch: notSuppied('api.fetch')},
  users: [],
  posts: []
};

function notSuppied(methodName) {
  return function (...args) {
    console.log(`${methodName} was not supplied. Called with args:`, args);
  };
}

function mapStateToProps(reducers) {
  return {
    posts: reducers.posts,
    users: reducers.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    api: bindActionCreators(api, dispatch),
    loadPosts: (opts) => LOAD_POSTS(opts)(dispatch),
    loadUsers: (opts) => LOAD_USERS(opts)(dispatch)
  };
}

function findByKey(col, key, id) {
    if (!col.length) {
      return null;
    }

    let findById = (item) => item[key] === id;
    let found = col.filter(findById);
    return found.length ? found[0] : null;
  }

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
