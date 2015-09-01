import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class TopNav extends Component {
    displayName = 'TopNav'

    render() {
        return (
            <Navbar brand={<a href="#/">react-redux-sample</a>}>
                <Nav>
                    <NavItem href="#/offices">Offices</NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default TopNav;
