import { React, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Header from '../Header/header';
import Footer from '../Footer/footers';
import axios from 'axios';
import { Alert } from 'react-bootstrap'; // Import Alert component from react-bootstrap

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon
} from 'mdb-react-ui-kit';
import '../assets/css/signup.css';

function SignUp() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        repeat_password: '', // Make sure to include this field in your formData state
        role_type: '',
        entreprenuerMetadata: {},
        startup: {},
        evaluation: {},
        // Make sure to include this field in your formData state
    });

    const [isEmpty, setIsEmpty] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(true); // State to track if passwords match
    const [message, setMessage] = useState(null); // State to track which message to display

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if any field is empty
        if (Object.values(formData).some(value => value === '')) {
            setIsEmpty(true);
            setPasswordMatch(true); // Reset password match state
            setMessage(null); // Reset message state
            return;
        }

        // Check if passwords match
        if (formData.password !== formData.repeat_password) {
            setPasswordMatch(false);
            setIsEmpty(false); // Reset empty field state
            setMessage(null); // Reset message state
            return;
        }

        const selectedRoleType = formData.role_type;

        // Modify the API endpoint based on the selected role type
        let apiEndpoint = '';
        if (selectedRoleType === 'entreprenuer') {
            apiEndpoint = 'http://localhost:8080/api/iwi/entreprenuer/add/account';
        } else if (selectedRoleType === 'investor') {
            apiEndpoint = 'http://localhost:8080/api/iwi/investor/add/account';
        }

        try {
            const response = await axios.post(apiEndpoint, formData);

            if (response.status === 201) {
                setMessage('success');
            } else if (response.status === 200) {
                setMessage('alreadyRegistered');
            } else {
                setMessage('error');
            }

            setIsEmpty(false); // Reset empty field state
            setPasswordMatch(true); // Reset password match state
        } catch (error) {
            console.error('Error sending data:', error);
            setMessage('error');
            setIsEmpty(false); // Reset empty field state
            setPasswordMatch(true); // Reset password match state
            // Handle error response
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Reset password match state when either password field changes
        if (name === 'password' || name === 'repeat_password') {
            setPasswordMatch(true);
        }

        // Reset message state when any field changes
        setMessage(null);
    };

    return (
        <>
            <Header />
            <MDBContainer fluid>
                <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                                <h3 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</h3>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="user me-3" size='lg' />
                                    <MDBInput
                                        label='Your Username'
                                        id='form1'
                                        type='text'
                                        name='username'
                                        value={formData.username}
                                        onChange={handleChange}
                                        required
                                        pattern="[A-Za-z0-9_]{3,20}"
                                        title="Username must be between 3 and 20 characters and can only contain letters, numbers, and underscores."
                                    />
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="envelope me-3" size='lg' />
                                    <MDBInput label='Your Email' id='form2' type='email' name='email' value={formData.email} onChange={handleChange} required />
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="user-circle me-3" size='lg' />
                                    <Form.Select style={{ height: '36px' }} name='role_type' value={formData.role_type} onChange={handleChange} required>
                                        <option value={""}>Choose Your Role</option>
                                        <option value={"entreprenuer"}>Entreprenuer</option>
                                        <option value={"investor"}>Investor</option>
                                    </Form.Select>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="lock me-3" size='lg' />
                                    <MDBInput label='Password' id='form3' type='password' name='password' value={formData.password} onChange={handleChange} required />
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="key me-3" size='lg' />
                                    <MDBInput label='Repeat your password' id='form4' type='password' name='repeat_password' value={formData.repeat_password} onChange={handleChange} required />
                                </div>

                                <div>
                                    {message === 'success' && (
                                        <div className='mt-3 my-3'>
                                            <Alert variant="success">Registration successful!</Alert>
                                        </div>
                                    )}

                                    {message === 'alreadyRegistered' && (
                                        <div className='mt-3 my-3'>
                                            <Alert variant="warning">You are already registered.</Alert>
                                        </div>
                                    )}

                                    {message === 'error' && (
                                        <div className='mt-3 my-3'>
                                            <Alert variant="danger">An error occurred. Please try again later.</Alert>
                                        </div>
                                    )}
                                </div>

                                {/* Display alert if any field is empty */}
                                {isEmpty && (
                                    <div className='mt-3 my-3'>
                                        <Alert variant="danger">Please fill out all fields.</Alert>
                                    </div>
                                )}

                                <MDBBtn className='mb-4' size='lg' type='submit' onClick={handleSubmit}>Sign Up</MDBBtn>
                            </MDBCol>
                            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
            <Footer />
        </>
    );
}

export default SignUp;
