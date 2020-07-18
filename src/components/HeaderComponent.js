import React, { Component } from 'react';
import {ReactComponent as AdrianLogo} from '../AdrianRios_Logo.svg';
import { Nav, Navbar } from 'react-bootstrap';
//import { NavLink } from 'react-router-dom';

const TopNavbar = (props) => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" >
            <Navbar.Brand href="#home">
               <AdrianLogo />
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="text-white" href="#features"><a>Home</a></Nav.Link>
                        <Nav.Link className="text-white" href="#pricing"><a>About Me</a></Nav.Link>
                        <Nav.Link className="text-white" href="#pricing"><a>Resume</a></Nav.Link>
                        <Nav.Link className="text-white" href="#pricing"><a>Portfolio</a></Nav.Link>
                        <Nav.Link className="text-white" href="#pricing"><a>Contact</a></Nav.Link>
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