import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Form } from 'react-bootstrap';
import './styles.css'; // Import your CSS file where you define the styles for full height
import InvestorProfile from '../investorDashboard/investorProfile';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Testdash = () => {
    const [profileClicked, setProfileClicked] = useState(true); // Initial state for profileClicked

    const handleProfileClick = () => {
        setProfileClicked(true); // Set profileClicked to true on profile click
    };

    const handleLogoutClick = () => {
        setProfileClicked(false); // Set profileClicked to false on logout click
    };

    return (
        <div className="full-height"> {/* Apply full height style to the parent container */}
            <Container fluid className="full-height">
                <Row className="full-height">
                    <Col md={3} className="bg-dark full-height">
                        <Navbar className="flex-column  full-height my-3">
                            <div className='bg-dark text-decoration-none text-white  d-none d-sm-inline d-flex align-item center ms-3 mt-2 my-3' style={{ fontSize: '2rem' }}>
                                <span className='d-flex align-item center'>Investor Dashboard</span>
                                <Nav className="flex-column w-100">
                                    <hr className='text-secondary d-sm-block' />
                                    <div className='fs-4 my-1 py-2 py-sm-0'>
                                        <Nav.Link className='text-light' onClick={handleProfileClick} style={{ fontSize: '1.5rem' }}>
                                            <i class="bi bi-person-square"></i>
                                            <span className='ms-3 d-none d-sm-inline'>Profile</span>
                                        </Nav.Link>
                                    </div>
                                    <hr className='text-secondary d-sm-block' />
                                    <div className='fs-4 my-1 py-2 py-sm-0'>
                                        <Nav.Link className='text-light' onClick={handleLogoutClick} style={{ fontSize: '1.5rem' }}>
                                            <i class="bi bi-box-arrow-left"></i>
                                            <span className='ms-3 d-none d-sm-inline'>Logout</span>
                                        </Nav.Link>
                                    </div>
                                </Nav>
                            </div>

                        </Navbar>
                    </Col>
                    <Col md={9} className="p-3 full-height">
                        {profileClicked ? (
                            <div className='md-6 my-3'>
                                <InvestorProfile />
                            </div>
                        ) : (
                            <div>
                                <h2 style={{ fontSize: '2rem' }}>You have Logged Out</h2>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Testdash;
