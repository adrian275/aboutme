import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
//import { NavLink } from 'react-router-dom';

const TopNavbar = (props) => {
    return (
        <div>
  <Nav
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
  className="social-navbar"
  >
        <Nav.Item>
            <Nav.Link className="text-white nav-link" href="/home"><a>LinkedIn</a></Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link className="text-white nav-link" eventKey="link-1"><a>GitHub</a></Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link className="text-white nav-link" eventKey="link-2"><a>Tableau Public</a></Nav.Link>
        </Nav.Item>
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