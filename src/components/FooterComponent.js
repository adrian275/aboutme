import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
//import { NavLink } from 'react-router-dom';

const TopNavbar = (props) => {
    return (
        <div>
                    <Nav className=" footer">
                        <Nav.Link className="text-white" href="#features"><a>LinkedIn</a></Nav.Link>
                        <Nav.Link className="text-white" href="#pricing"><a>GitHub</a></Nav.Link>
                        <Nav.Link className="text-white" href="#pricing"><a>TableauPublic</a></Nav.Link>
                    </Nav>
        </div>
    );
}

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <TopNavbar />
            </React.Fragment>
        )
    }
}

export default Footer;