import React from 'react/addons';
import {ProgressBar} from 'react-bootstrap';
import mixin from 'es6-react-mixins';

let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

export default class LoadingBar extends mixin(React.addons.PureRenderMixin) {
  displayName = 'LoadingBar component'
  constructor(props) {
    super(props);
    this.state = {pending: props.pending || 0, complete: props.complete || 0};
  }
  componentWillReceiveProps(nextProps) {
    let {pending, complete} = nextProps;
    let setNextProps = ()=> this.setState({pending, complete});
    if (this.props.complete > 0 && complete === 0) {
      this.setState({
        pending: this.props.pending,
        complete: this.props.pending
      });

      setTimeout(setNextProps, 1000);
    } else {
      setNextProps();
    }
  }
  render() {
    let result = null;
    if (this.state.pending !== 0) {
      let percent = (this.state.complete / this.state.pending) * 100;
      if (percent < 10) {
        percent = 5;
      }
      result = (
        <ReactCSSTransitionGroup transitionName="example" transitionAppear={true}>
          <ProgressBar active now={percent} />
        </ReactCSSTransitionGroup>
      );
    }

    return result;
  }
}
