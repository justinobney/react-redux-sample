// Connected component
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Button, Panel} from 'react-bootstrap';

function mapStateToProps(reducers) {
    const {officeState} = reducers;
    return {officeState};
}

class Detail extends Component {
  displayName = 'Office Detail component'

  componentWillMount() {
    let found = this.props.officeState.offices.filter((office)=> {
      return office.id === parseInt(this.props.params.officeId, 10);
    });
    this.office = found.length ? found[0] : {};
  }

  render() {
    return (
      <Row>
        <Col xs={4}>
          <Panel header={this.office.name}>
            <span>{this.office.abbreviation}</span>
            <br />
            <Button href={`#/offices`}>Back to list</Button>
          </Panel>
        </Col>
      </Row>
    );
  }
}
export default connect(mapStateToProps)(Detail);
