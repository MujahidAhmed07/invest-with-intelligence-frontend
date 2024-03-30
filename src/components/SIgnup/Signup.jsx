import { React, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Header from '../Header/header';
import Footer from '../Footer/footers';
import axios from 'axios';

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
        investorMetadata: {},
        entreprenuerMetadata: {},
        evaluation: {},
        startup: {}

    });

    const handleSubmit = async (e) => {

        const selectedRoleType = formData.role_type;

        if (formData.password !== formData.repeat_password) {
            alert("Passwords do not match");
            return;
        }

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
                // Handle success response
            } else {
                console.log('Username or email already exists');
            }
        } catch (error) {
            console.error('Error sending data:', error);
            // Handle error response
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
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
                                    <MDBInput label='Repeat your password' id='form4' type='password' name='repeat_password' value={formData.repeat_Password} onChange={handleChange} required />
                                </div>

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
