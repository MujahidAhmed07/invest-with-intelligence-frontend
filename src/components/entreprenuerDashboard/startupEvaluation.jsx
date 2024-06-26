import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Container, Row, Col } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import Chart from 'chart.js/auto';
import React, { useState, useEffect } from "react";
import axios from 'axios';


function StartupEvaluation(data) {
    const [getdata, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const em = localStorage.getItem('userEmail');

                const response = await axios.get(`http://localhost:8080/api/model/get/profit/${em}`);
                setData(response.data);

                // console.log(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to run only once on component mount

    return (
        <Container>
            {/* First Card */}
            <Card>
                <Card.Body>
                    <Card.Title><h1 className='fw-bold my-3'>Startup Evaluation Charts</h1></Card.Title>

                    {/* <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Line
                                        data={{
                                            labels: ["January", "February", "March", "April", "May", "June", "July"],
                                            datasets: [
                                                {
                                                    label: "My First Dataset",
                                                    data: [65, 59, 80, 81, 56, 55, 40], // Dummy data values for the line chart
                                                    fill: false,
                                                    borderColor: "rgb(75, 192, 192)",
                                                    tension: 0.1
                                                }
                                            ]
                                        }}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row> */}
                </Card.Body>
            </Card>

            {/* Second Card */}
            <Card>
                <Card.Body>
                    <Row>
                        {/* <Col xs={6}>
                            <Card>
                                <Card.Body>
                                    <Bar
                                        data={{
                                            labels: ["A", "B", "C"],
                                            datasets: [
                                                {
                                                    label: 'Dummy Data',
                                                    data: [50, 70, 30], // Dummy data values for the bar chart
                                                    backgroundColor: [
                                                        'rgba(255, 99, 132, 0.2)', // Background color for the bars
                                                        'rgba(54, 162, 235, 0.2)',
                                                        'rgba(255, 206, 86, 0.2)',
                                                    ],
                                                    borderColor: [
                                                        'rgba(255, 99, 132, 1)', // Border color for the bars
                                                        'rgba(54, 162, 235, 1)',
                                                        'rgba(255, 206, 86, 1)',
                                                    ],
                                                    borderWidth: 1, // Border width for the bars
                                                },
                                            ],
                                        }}
                                    />
                                </Card.Body>
                            </Card>
                        </Col> */}
                        <Col xs={6}>
                            <Card>
                                <Card.Body >
                                    <Doughnut
                                        data={{
                                            labels: ["Profit"],
                                            datasets: [{
                                                data: [getdata], // Dummy data values for the doughnut chart
                                                backgroundColor: [
                                                    'rgba(255, 99, 132, 0.6)' // Background color for each segment
                                                ],
                                                borderColor: [
                                                    'rgba(255, 99, 132, 1)', // Border color for each segment
                                                ],
                                                borderWidth: 1, // Border width for each segment
                                            }]
                                        }}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>

    );
}

export default StartupEvaluation;