import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { ReactComponent as AboutMe } from '../AboutMe.svg';
import { ReactComponent as Resume } from '../Resume.svg';

class Home extends Component {

    render() {
        return (
            <div className="m-auto ">
                <div className="m-auto home-container">
                    <Container className="">
                        <Row className="justify-content-md-center">
                            <Col className="bg-color-test" lg={6}>
                                <div id="triangle-topleft"></div>
                               
                            </Col>
                            <Col className="bg-color-test" lg={6}>
                            <div id="triangle-topright"></div>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col className="bg-color-test" lg={6}>
                            <div id="triangle-bottomleft"></div>
                            </Col>
                            <Col className="bg-color-test" lg={6}>
                                <div id="triangle-bottomright" className=""></div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    };
}

export default Home;