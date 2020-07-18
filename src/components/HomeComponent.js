import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

class Home extends Component {

    render() {
        return (
            <div className="m-auto ">
                <Container className="h-100 bg-color-test1 home">
                    <Row className='bg-color-test h-50 d-inline-block'>
                        <Col className="h-50" md={6}><h1>Me</h1></Col>
                        <Col className="h-50" md={6}><h1>Resume</h1></Col>
                    </Row>
                    <Row className='bg-color-test h-50 d-inline-block'>
                        <Col md={6}><h1>Portfolio</h1></Col>
                        <Col md={6}><h1>Contact</h1></Col>
                    </Row>
                </Container>
            </div>
        );
    };       
}

export default Home;