import React, { useState, useEffect } from "react";
import { Col, Card } from "react-bootstrap";
import Startups from "../../../components/card";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import axios from 'axios';



function Invest() {
    const [data, setData] = useState([]);
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/iwi/startup/home/");
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Container>
                <div className="text-center mb-5">
                    <h1>Popular Startups</h1>
                </div>
                <Card>
                    <Card.Body>
                        <Row className="mb-3 mt-3">
                            {data.map((startup, index) => (
                                <Col key={index} xs={12} md={4}>
                                    <Startups startup={startup} />
                                </Col>
                            ))}
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </>

    );

}

export default Invest;