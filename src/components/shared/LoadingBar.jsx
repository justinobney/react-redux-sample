import React, {Component} from 'react/addons';
import {ProgressBar} from 'react-bootstrap';
import mixin from 'es6-react-mixins';

let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

export default class LoadingBar extends Component {
  displayName = 'LoadingBar component'
  timeoutId = null
  constructor(props) {
    super(props);
    let {pending, complete} = props;
    let percent = ((complete / pending) * 100) || 0;
    this.state = {percent};
  }
  setNextProps(percent) {
    if (this.timeoutId) { clearTimeout(this.timeoutId); }
    this.setState({percent});
  }
  componentWillReceiveProps(nextProps) {
    let {pending, complete} = nextProps;
    let percent = (complete / pending) * 100;

    percent = (isNaN(percent) ? 0 : percent);
    if (pending > 0 && percent < 10) {
      percent = 5;
    }

    if (this.props.complete > 0 && complete === 0) {
      this.setNextProps(100);
      this.timeoutId = setTimeout(() => this.setNextProps(0), 1000);
    } else {
      this.setNextProps(percent);
    }
  }
  render() {
    let result = null;
    if (this.state.percent !== 0) {
      result = (
        <LoadingBarInner percent={this.state.percent} />
      );
    }

    return result;
  }
}

class LoadingBarInner extends mixin(React.addons.PureRenderMixin) {
  displayName = 'LoadingBarInner component'
  render() {
    return (
      <ReactCSSTransitionGroup transitionName="example" transitionAppear={true}>
        <ProgressBar active now={this.props.percent} />
      </ReactCSSTransitionGroup>
    );
  }
}
