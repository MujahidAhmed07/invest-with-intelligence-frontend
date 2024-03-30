
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserProfile() {

    const [userData, setUserData] = useState({
        username: '',
        password: '',
        investorMetadata: {
            fname: '',
            lname: '',
            contact: '',
            address: '',
            city: '',
            description: ''
        }
    });


    const navigate = useNavigate();

    useEffect(() => {
        // Function to fetch initial data
        const fetchData = async () => {
            try {
                const em = sessionStorage.getItem('userEmail');
                const response = await axios.get(`http://localhost:8080/api/iwi/investor/get/email/${em}`);
                setUserData(response.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData(prevData => ({
            ...prevData,
            investorMetadata: {
                ...prevData.investorMetadata,
                [name]: value
            }
        }));
    };

    // const userEmail = sessionStorage.getItem('userEmail');
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const id = userData.investorMetadata.meta_id;
            const metadata = userData.investorMetadata;
            const response = await axios.put(`http://localhost:8080/api/iwi/imeta/update/${id}`, metadata);
            console.log('Data updated successfully:', response.data);
            // Optionally, you can perform additional actions after successful update
        } catch (error) {
            console.error('Error updating data:', error);
            // Optionally, you can handle errors here, such as displaying an error message to the user
        }
    };

    return (
        <Container>
            <Card>
                <Card.Body className='w-100'>
                    <Card.Title><h1 className='fw-bold'>Your Profile Details</h1></Card.Title>
                    <Form className="my-3">
                        <Row>
                            <Form.Group as={Col} controlId="formGridfname">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First name" name="fname" value={userData.investorMetadata.fname} onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridlname">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last name" name="lname" value={userData.investorMetadata.lname} onChange={handleInputChange} />
                            </Form.Group>

                        </Row>

                        {/* <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="username" placeholder="Enter Username" value={userData.username} />
                            </Form.Group>
                        </Row> */}

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={userData.email} disabled />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="text" placeholder="Password" value={userData.password} disabled />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" name="address" value={userData.investorMetadata.address} onChange={handleInputChange} />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control placeholder="Karachi" value={userData.investorMetadata.city} name="city" onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridContact">
                                <Form.Label>Contact</Form.Label>
                                <Form.Control type="number" value={userData.investorMetadata.contact} name="contact" onChange={handleInputChange} />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Write description about yourself</Form.Label>
                                    <Form.Control as="textarea" rows={5} placeholder="Write your descrition" value={userData.investorMetadata.description} name="description" onChange={handleInputChange} />
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


export default UserProfile;