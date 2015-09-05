import React, {Component} from 'react/addons';
import {Panel, OverlayTrigger, Popover, Button} from 'react-bootstrap';

export default class PostDetail extends Component {
  displayName = 'PostDetail component'
  renderPopoverTrigger(user) {
    let content = 'Loading User Info...';

    if (user.username) {
      let userInfoPopover = (
        <Popover title={user.name}>
          <a href={`mailto:${user.email}`} target="_blank">
            {user.email}
          </a>
          <br />
          {user.phone}
        </Popover>
      );

      content = (
        <OverlayTrigger rootClose trigger="click"
          placement="top" overlay={userInfoPopover}>
            <Button bsStyle="link">
              {`-- @${user.username}`}
            </Button>
        </OverlayTrigger>
      );
    }

    return content;
  }
  render() {
    let {post, user} = this.props;
    let titleLink = <a href={`#/posts/${post.id}`}>{post.title}</a>;
    return (
      <Panel bsStyle="info" header={titleLink}>
          {post.body}
          <hr />
          {this.renderPopoverTrigger(user || {})}
      </Panel>
    );
  }
}
