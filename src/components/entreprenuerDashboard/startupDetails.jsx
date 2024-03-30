import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import axios from 'axios';

function DataForm({ data }) {
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState({
        "startup": {
            startupName: '',
            teamSize: '',
            startupDetails: '',
            dateJoined: '',
            startupShortDetails: '',
            startupLocation: '',
            startupCategory: ''
        }
    });

    useEffect(() => {
        if (data) {
            setUserData(data); // Update userData state with data prop
        }
    }, [data]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData(prevData => ({
            ...prevData,
            startup: {
                ...prevData.startup,
                [name]: value
            }
        }));
    };

    const startupCategories = [
        "Technology", "Healthcare", "Education", "Finance", "E-commerce",
        "Artificial Intelligence (AI)", "Biotechnology", "Fashion", "Food and Beverage",
        "Travel and Tourism", "Entertainment", "Real Estate", "Automotive",
        "Environmental Sustainability", "Fitness and Wellness", "Social Media",
        "Gaming", "Transportation", "Legal Services", "Retail",
    ];

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const id = userData.startup.startup_id;
            const metadata = userData.startup;
            setLoading(true);
            const response = await axios.put(`http://localhost:8080/api/iwi/startup/update/details/${id}`, metadata);
            console.log('Data updated successfully:', response.data);
            setUserData(prevData => ({ ...prevData, entreprenuerMetadata: response.data }));
        } catch (error) {
            console.error('Error updating data:', error);
        } finally {
            setLoading(false);
        }
    };

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <Card>
                <Card.Body className='w-100'>
                    <Card.Title><h1 className='fw-bold'>Your Startup Details</h1></Card.Title>
                    <Form className='my-3'>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridSname">
                                <Form.Label>Startup Name</Form.Label>
                                <Form.Control type="text" name="startupName" placeholder="Enter your startup name" value={userData.startup.startupName} onChange={handleInputChange} required />
                            </Form.Group>
                            <Form.Group as={Col} controlId="valuation">
                                <Form.Label>Team Size</Form.Label>
                                <Form.Control type="number" name="teamSize" placeholder="5" value={userData.startup.teamSize} onChange={handleInputChange} required />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} className="mb-3" controlId="startupName">
                                <Form.Label>Startup Location</Form.Label>
                                <Form.Control type="text" placeholder="Enter Startup Address" required name="startupLocation" value={userData.startup.startupLocation} onChange={handleInputChange} />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3" controlId="joinedDate">
                                <Form.Label>Startup Joined Date</Form.Label>
                                <Form.Control type="date" name="dateJoined" value={userData.startup.dateJoined} onChange={handleInputChange} />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} className="mb-3" controlId="startupCategory">
                                <Form.Label>Startup Category</Form.Label>
                                <Form.Control as="select" name="startupCategory" placeholder="Select Startup Category" value={userData.startup.startupCategory} onChange={handleInputChange} required>
                                    {startupCategories.map((category, index) => (
                                        <option name="startupCategory" value={category} key={index}>{category}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>Startup Title Description</Form.Label>
                                <Form.Control as="textarea" rows={2} name="startupShortDetails" value={userData.startup.startupShortDetails} onChange={handleInputChange} required />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>Startup Description</Form.Label>
                                <Form.Control as="textarea" rows={6} name="startupDetails" value={userData.startup.startupDetails.replace(/\\n/g, '\n')} onChange={handleInputChange} required />
                            </Form.Group>
                        </Row>
                        <div className="d-grid">
                            <Button variant="dark" type="submit" onClick={handleSubmit}>Submit</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default DataForm;
