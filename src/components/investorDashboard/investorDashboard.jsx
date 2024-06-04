import React, { useState } from 'react';
import { Row, Col, Navbar, Nav } from 'react-bootstrap';
import InvestorProfile from './investorProfile';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';

const InvestorDashboard = () => {

    const userRole = localStorage.getItem('role');


    const [profileClicked, setProfileClicked] = useState(true); // Initial state for profileClicked

    const navigate = useNavigate();

    const handleProfileClick = () => {
        setProfileClicked(true); // Set profileClicked to true on profile click
    };

    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) {
        navigate('/signin');
    }

    if ('userEmail' === userEmail) {
        navigate('/investor-dashboard');
    }

    const handleLogoutClick = () => {
        localStorage.removeItem('userEmail');
        navigate('/signin');
        // setProfileClicked(false); // Set profileClicked to false on logout click
    };

    // if (!data) {
    //     return <div>Loading!!</div>; // or return a loading indicator
    // }

    return (
        <>
            <Row>
                <Col md={3} className="bg-dark">
                    <Navbar className="flex-column  full-height my-3">
                        <div className='bg-dark text-decoration-none text-white  d-none d-sm-inline d-flex align-item center ms-3 mt-2 my-3' style={{ fontSize: '2rem' }}>
                            <span className='d-flex align-item center'>Investor Dashboard</span>
                            <Nav className="flex-column w-100">
                                <hr className='text-secondary d-sm-block' />
                                <div className='fs-4 my-1 py-2 py-sm-0'>
                                    <Nav.Link className='text-light' onClick={handleProfileClick} style={{ fontSize: '1.2rem' }}>
                                        <i class="bi bi-person-square"></i>
                                        <span className='ms-3 d-none d-sm-inline'>Profile</span>
                                    </Nav.Link>
                                </div>
                                <hr className='text-secondary d-sm-block' />
                                <div className='fs-4 my-1 py-2 py-sm-0'>
                                    <Nav.Link className='text-light' onClick={handleLogoutClick} style={{ fontSize: '1.2rem' }}>
                                        <i class="bi bi-box-arrow-left"></i>
                                        <span className='ms-3 d-none d-sm-inline'>Logout</span>
                                    </Nav.Link>
                                </div>
                            </Nav>
                        </div>

                    </Navbar>
                </Col>
                <Col md={9}>
                    {profileClicked ? (
                        <div>
                            <InvestorProfile />
                        </div>
                    ) : (
                        <div>
                            <h2 style={{ fontSize: '2rem' }}>You have Logged Out</h2>
                        </div>
                    )}
                </Col>
            </Row >
        </>
    );
};

export default InvestorDashboard;
