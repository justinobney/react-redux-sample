import React, {Component} from 'react/addons';
import {Panel} from 'react-bootstrap';

export default class PostDetail extends Component {
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
