import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from 'react-bootstrap/FormControl';

const Header = (props) => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Algo-Visualiser</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <NavDropdown title="Algorithms" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Recursive</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Dynamic programming</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Backtracking</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Divide and conquer</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Greedy</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Brute Force</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Randomized</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Form inline>
                <Button variant="outline-success">Login</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
);

export default Header;