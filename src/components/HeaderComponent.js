import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
//import { NavLink } from 'react-router-dom';

const TopNavbar = (props) => {
    return (
        <div>
            <Navbar className="background-darkgrey" >
                <Navbar.Brand className="text-white" href="#home">Adrian Rios</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto navbar">
                        <Nav.Link className="text-white nav-link" href="#home"><a>Home</a></Nav.Link>
                        <Nav.Link className="text-white nav-link" href="#link"><a>About Me</a></Nav.Link>
                        <Nav.Link className="text-white nav-link" href="#link"><a>Resume</a></Nav.Link>
                        <Nav.Link className="text-white nav-link" href="#link"><a>Portfolio</a></Nav.Link>
                        <Nav.Link className="text-white nav-link" href="#link"><a>Contact</a></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <TopNavbar />
            </React.Fragment>
        )
    }
}

export default Header;