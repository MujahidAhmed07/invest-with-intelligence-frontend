
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import axios from 'axios';


function EntreprenuerProfile({ data }) {

    const [loading, setLoading] = useState(false);

    const [userData, setUserData] = useState({
        username: '',
        password: '',
        entreprenuerMetadata: {
            fname: '',
            lname: '',
            contact: '',
            address: '',
            city: '',
            description: ''
        }
    });

    // useEffect hook for updating userData when data prop changes
    useEffect(() => {
        if (data) {
            setUserData(data); // Update userData state with data prop
        }
    }, [data]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData(prevData => ({
            ...prevData,
            entreprenuerMetadata: {
                ...prevData.entreprenuerMetadata,
                [name]: value
            }
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const id = userData.entreprenuerMetadata.meta_id;
            const metadata = userData.entreprenuerMetadata;
            setLoading(true);


            const response = await axios.put(`http://localhost:8080/api/iwi/emeta/update/${id}`, metadata);
            console.log('Data updated successfully:', response.data);
            setUserData(prevData => ({  // Update state after successful request
                ...prevData,
                entreprenuerMetadata: response.data  // Assuming response.data contains updated metadata
            }));
            // Optionally, you can perform additional actions after successful update
        } catch (error) {
            console.error('Error updating data:', error);
            // Optionally, you can handle errors here, such as displaying an error message to the user
        } finally {
            // Set loading state to false
            setLoading(false);
        }
    };

    if (!data) {

        setTimeout(() => {
            return (
                <div>Loading...</div>
            );
        }, 4000); // 4000 milliseconds = 4 seconds
    }

    return (
        <Container>
            <Card>
                <Card.Body className='w-100'>
                    <Card.Title><h1 className='fw-bold'>Your Profile Details</h1></Card.Title>
                    <Form className="my-3">
                        <Row className='mb-3'>
                            <Form.Group as={Col} controlId="formGridfname">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First name" name="fname" value={userData.entreprenuerMetadata.fname} onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridlname">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last name" name="lname" value={userData.entreprenuerMetadata.lname} onChange={handleInputChange} />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" value={userData.email} onChange={handleInputChange} disabled />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="text" placeholder="Password" value={userData.password} onChange={handleInputChange} disabled />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" name="address" value={userData.entreprenuerMetadata.address} onChange={handleInputChange} />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control name="city" value={userData.entreprenuerMetadata.city} onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridContact">
                                <Form.Label>Contact</Form.Label>
                                <Form.Control name="contact" type="number" value={userData.entreprenuerMetadata.contact} onChange={handleInputChange} />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Write description about yourself</Form.Label>
                                    <Form.Control as="textarea" name="description" rows={9} value={userData.entreprenuerMetadata.description} onChange={handleInputChange} />
                                </Form.Group>
                            </Col>
                        </Row>


                        <div className="d-grid">
                            <Button variant="dark" type="submit" onClick={handleSubmit}>
                                Update
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}


export default EntreprenuerProfile;