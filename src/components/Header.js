import React, { Component } from 'react';
import {Navbar ,Nav} from 'react-bootstrap';
class Header extends Component {
    render() {
        return (

            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Exam</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/favariote">favariote</Nav.Link>
                </Nav>
            
            </Navbar>
        );
    }
}

export default Header;
