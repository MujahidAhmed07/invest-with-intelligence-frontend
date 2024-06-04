import React, { useState, useEffect } from "react";
import { Row, Col, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import EntreprenuerProfile from './entreprenuerProfile';
import StartupDataUpload from './startupDataUpload';
import StartupDetails from './startupDetails';
import StartupEvaluation from './startupEvaluation';
import { useNavigate } from "react-router-dom";
import '../assets/css/entrepreneurDashboard.css';
import axios from 'axios';

function EntreprenuerDashboard() {


    const [data, setData] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const em = localStorage.getItem('userEmail');
                const response = await axios.get(`http://localhost:8080/api/iwi/entreprenuer/get/custom/email/${em}`);
                setData(response.data);
                console.log(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to run only once on component mount

    const handleItemClick = (itemName) => {
        setSelectedItem(itemName);
    };

    const userEmail = localStorage.getItem('userEmail');

    if ('userEmail' === userEmail) {
        navigate('/investor-dashboard');
    }
    if (!userEmail) {
        navigate('/signin');
    }


    const Edashlogout = () => {
        localStorage.removeItem('userEmail');
        navigate('/signin');

    }

    const renderContent = () => {
        switch (selectedItem) {
            case "profile":
                return <EntreprenuerProfile data={data} />;
            case "startupDetails":
                return <StartupDetails data={data} />;
            case "startupFileupload":
                return <StartupDataUpload data={data} />;
            case "profitprediction":
                return <StartupEvaluation data={data} />;
            case "edashlogout":
                return <Edashlogout />;
            default:
                return <EntreprenuerProfile data={data} />;
        }
    };

    if (!data) {
        return <div>Loading!!</div>; // or return a loading indicator
    }

    return (
        <Row>
            {/* Sidebar starts */}
            <Col md={3} className="bg-dark">
                <Navbar className="flex-column  full-height my-3">
                    <div className='bg-dark text-decoration-none text-white  d-none d-sm-inline d-flex align-item center ms-3 mt-2 my-3' style={{ fontSize: '2rem' }}>
                        <span className='d-flex align-item center'>Entreprenuer Dashboard</span>
                        <Nav className="flex-column w-100">

                            <hr className='text-secondary d-sm-block' />
                            <div className='fs-4 my-1 py-2 py-sm-0'>
                                <Nav.Link className='text-light' onClick={() => handleItemClick("profile")} style={{ fontSize: '1.2rem' }}>
                                    <i className="bi bi-person-square"></i>
                                    <span className='ms-3 d-none d-sm-inline'>Profile</span>
                                </Nav.Link>
                            </div>
                            <hr className='text-secondary d-sm-block' />

                            <div className='fs-4 my-1 py-2 py-sm-0'>
                                <Nav.Link className='text-light' onClick={() => handleItemClick("startupDetails")} style={{ fontSize: '1.2rem' }}>
                                    <i className="bi bi-card-text"></i>
                                    <span className='ms-3 d-none d-sm-inline'>Startup Details</span>
                                </Nav.Link>
                            </div>
                            <hr className='text-secondary d-sm-block' />

                            <div className='fs-4 my-1 py-2 py-sm-0'>
                                <Nav.Link className='text-light' onClick={() => handleItemClick("startupFileupload")} style={{ fontSize: '1.2rem' }}>
                                    <i className="bi bi-file-earmark-arrow-up"></i>
                                    <span className='ms-3 d-none d-sm-inline'>Startup Data Upload</span>
                                </Nav.Link>
                            </div>

                            <hr className='text-secondary d-sm-block' />

                            <div className='fs-4 my-1 py-2 py-sm-0'>
                                <Nav.Link className='text-light' onClick={() => handleItemClick("profitprediction")} style={{ fontSize: '1.2rem' }}>
                                    <i className="bi bi-graph-up-arrow"></i>
                                    <span className='ms-3 d-none d-sm-inline'>Profit Prediction</span>
                                </Nav.Link>
                            </div>
                            <hr className='text-secondary d-sm-block' />

                            <div className='fs-4 my-1 py-2 py-sm-0'>
                                <Nav.Link className='text-light' onClick={() => handleItemClick("edashlogout")} style={{ fontSize: '1.2rem' }}>
                                    <i className="bi bi-box-arrow-left"></i>
                                    <span className='ms-3 d-none d-sm-inline'>Logout</span>
                                </Nav.Link>
                            </div>
                        </Nav>
                    </div>
                </Navbar>
            </Col>
            {/* Sidebar ends */}
            <Col md={9}>
                <div>
                    {renderContent()}
                </div>
            </Col>
        </Row>
    );
}

export default EntreprenuerDashboard;
