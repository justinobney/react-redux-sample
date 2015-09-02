// Connected component
import React, {Component} from 'react/addons';
import {connect} from 'react-redux';
import {Row, Col, Table, Button} from 'react-bootstrap';

function mapStateToProps(reducers) {
    const {officeState} = reducers;
    return {officeState};
}

let SPACE = ' ';

let actionButtonStyles = {
  textAlign: 'right'
};

class List extends Component {
  displayName = 'Office List component'

  _renderRow(row) {
    return (
      <tr>
        <td>{row.abbreviation}</td>
        <td>{row.name}</td>
        <td style={actionButtonStyles}>
          <Button href={`#/offices/${row.id}/details`}>Details</Button>
          {SPACE}
          <Button href={`#/offices/${row.id}/edit`}>Edit</Button>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
        <Table condensed hover>
          <thead>
            <tr>
              <th>Abbreviation</th>
              <th>Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.officeState.offices.map(this._renderRow)}
          </tbody>
        </Table>
        </Col>
      </Row>
    );
  }
}

export default connect(mapStateToProps)(List);
