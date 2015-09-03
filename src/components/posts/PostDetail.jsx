import React, {Component} from 'react/addons';
import {Panel, OverlayTrigger, Popover, Button} from 'react-bootstrap';

export default class PostDetail extends Component {
  displayName = 'PostDetail component'
  render() {
    let thePost = this.props.post;
    let theUser = this.props.user || {};
    let thePopover = (
      <Popover title={theUser.name}>
        <a href={`mailto:${theUser.email}`} target="_blank">
          {theUser.email}
        </a>
        <br />
        {theUser.phone}
      </Popover>
    );

    return (
      <Panel
        bsStyle="info"
        header={<a href={`#/posts/${thePost.id}`}>{thePost.title}</a>}>
          {thePost.body}
          <hr />
          <OverlayTrigger
            trigger="click"
            rootClose
            placement="top"
            overlay={thePopover}>
              <Button bsStyle="link">
                {`-- @${theUser.username || 'Loading...'}`}
              </Button>
          </OverlayTrigger>
      </Panel>
    );
  }
}
