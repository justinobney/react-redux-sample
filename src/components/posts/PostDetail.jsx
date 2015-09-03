import React, {Component} from 'react/addons';
import {Panel, OverlayTrigger, Popover, Button} from 'react-bootstrap';

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

          <OverlayTrigger trigger="click" rootClose placement="top"
            overlay={<Popover title={theUser.name}>
                <strong>@{theUser.username}</strong>
                <br />
                <a href={`mailto:${theUser.email}`} target="_blank">{theUser.email}</a>
                <br />
                {theUser.phone}
              </Popover>}>
            <Button bsStyle="link">
              {`-- ${theUser.name || 'Loading...'}`}
            </Button>
          </OverlayTrigger>
      </Panel>
    );
  }
}
