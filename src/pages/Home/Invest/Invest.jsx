import React from "react";
import { Col } from "react-bootstrap";
import Startups from "../../../components/card";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';


function Invest() {
    return (
        <>
            
            <Container className="mt-3 mb-3">
            <h1>Invest in Growing Startups</h1> <br />
                <Row className="mb-3 mt-3">
                    <Col>
                        <Startups />
                    </Col>
                    <Col>
                        <Startups />
                    </Col>
                    <Col>
                        <Startups />
                    </Col>
                </Row>

                <Row className="mb-3 mt-3">
                    <Col>
                        <Startups />
                    </Col>
                    <Col>
                        <Startups />
                    </Col>
                    <Col>
                        <Startups />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Startups />
                    </Col>
                    <Col>
                        <Startups />
                    </Col>
                    <Col>
                        <Startups />
                    </Col>
                </Row>
            </Container>
        </>

    );

}

export default Invest;