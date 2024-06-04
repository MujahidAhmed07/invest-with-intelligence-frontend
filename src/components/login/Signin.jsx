import React, { useState } from 'react';
import axios from 'axios';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBValidation, MDBValidationItem } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Form from 'react-bootstrap/Form';
import Header from '../Header/header';
import Footer from '../Footer/footers';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

function Signin() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [validLogin, setValidLogin] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        const selectedRoleType = formData.role_type;

        let apiEndpoint = '';
        if (selectedRoleType === 'entreprenuer') {
            apiEndpoint = 'http://localhost:8080/api/iwi/auth/entreprenuer/login';
        } else if (selectedRoleType === 'investor') {
            apiEndpoint = 'http://localhost:8080/api/iwi/auth/investor/login';
        }

        try {
            const response = await axios.post(apiEndpoint, formData);
            const isDataNotEmpty = Object.keys(response.data).length !== 0;

            if (response.status === 201 && isDataNotEmpty) {
                const userEmail = response.data.username; // Assuming email is under 'username', please adjust accordingly
                console.log('User Email:', userEmail);

                localStorage.setItem('userEmail', userEmail);
                setValidLogin(true);

                if (selectedRoleType === 'entreprenuer') {
                    navigate('/entreprenuer-dashboard');
                } else if (selectedRoleType === 'investor') {
                    navigate('/investor-dashboard');
                }

                setTimeout(() => {
                    setValidLogin(false);
                }, 1500); // Set timeout for 1.5 seconds
            } else {
                setValidLogin(false);
            }
        } catch (error) {
            console.error('Error sending data:', error);
            setValidLogin(false);
        }
    };

    return (
        <>
            <Header />
            <MDBContainer fluid className="p-3 my-5 h-custom">
                <MDBRow>
                    <MDBCol col='10' md='6'>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
                    </MDBCol>
                    <MDBCol col='4' md='6'>
                        <div className="d-flex flex-row align-items-center justify-content-center">
                            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                            <MDBBtn floating size='md' tag='a' className='me-2'>
                                <MDBIcon fab icon='facebook-f' />
                            </MDBBtn>
                            <MDBBtn floating size='md' tag='a' className='me-2'>
                                <MDBIcon fab icon='twitter' />
                            </MDBBtn>
                            <MDBBtn floating size='md' tag='a' className='me-2'>
                                <MDBIcon fab icon='linkedin-in' />
                            </MDBBtn>
                        </div>

                        <div className="divider d-flex align-items-center my-4">
                            <p className="text-center fw-bold mx-3 mb-0">Or</p>
                        </div>

                        <MDBValidation className='row g-3'>
                            <MDBValidationItem>
                                <MDBInput
                                    value={formData.email}
                                    name='email'
                                    onChange={handleChange}
                                    id='formControlLg'
                                    required
                                    wrapperClass='mb-4' label='Email address' type='email' size="lg"
                                />
                            </MDBValidationItem>
                            <MDBValidationItem>
                                <MDBInput
                                    value={formData.password}
                                    name='password'
                                    onChange={handleChange}
                                    required
                                    wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"
                                />
                            </MDBValidationItem>

                            <MDBValidationItem>
                                <Form.Select style={{ height: '42px' }} name='role_type' value={formData.role_type} onChange={handleChange} required>
                                    <option value={""}>Choose a role</option>
                                    <option value={"entreprenuer"}>Entreprenuer</option>
                                    <option value={"investor"}>Investor</option>
                                </Form.Select>

                                <div className='mt-3 my-3'>
                                    {!validLogin && (
                                        <Alert variant="danger">
                                            Invalid Credentials !!!
                                        </Alert>
                                    )}
                                </div>

                                <div className='text-center text-md-start mt-4 pt-2'>
                                    <MDBBtn className="mb-0 px-5" size='lg' onClick={handleSubmit}>Login</MDBBtn>
                                    <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/Signup" className="link-danger">Register</a></p>
                                </div>
                            </MDBValidationItem>
                        </MDBValidation>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <Footer />
        </>
    );
}

export default Signin;
