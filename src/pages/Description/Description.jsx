import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function Description() {
  const [data, setData] = useState(""); // Assuming data is a string, adjust as needed
  const { id } = useParams();
  const navigate = useNavigate(); // Get the navigate function
  const e_id = data.evaluation ? data.evaluation.e_id : "";


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/iwi/startup/about/${id}`);
        setData(response.data); // Assuming response.data is a string, adjust as needed
        console.log(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]); // Include id in the dependency array to re-run effect when id changes

  if (!data) {
    return <div>Loading......</div>
  }
  return (
    <>
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>
              <h2>About Startup</h2>
            </Card.Title>
            <br />

            <Card className="mb-6">
              <Card.Body>
                <Card.Title className="mb-5">
                  <h3>Details</h3>
                </Card.Title>
                <Row>
                  <Col>
                    <h5>Startup Name</h5>
                    <p>{data.startupName}</p>

                    <h5>Startup Team Size</h5>
                    <p>{data.teamSize}</p>
                  </Col>
                  <Col>
                    <h5>Startup Location</h5>
                    <p>{data.startupLocation}</p>

                    <h5>Startup Category</h5>
                    <p>{data.startupCategory}</p>
                  </Col>

                  <Col>
                    <h5>Startup Date Joined</h5>
                    <p>{data.dateJoined}</p>
                  </Col>

                </Row>
              </Card.Body>
            </Card>

            <Card className="mb-6">
              <Card.Body>
                <Card.Title className="mb-3">
                  <h3>Startup Description</h3>
                </Card.Title>
                <Row>
                  <Col>
                    <div style={{ whiteSpace: 'pre-line' }}>{data.startupDetails}</div>
                  </Col>

                </Row>
              </Card.Body>
            </Card>

            <Card className="mb-6">
              <Card.Body>
                <Card.Title className="mb-5">
                  <h3>Startup Owner/Entreprenuer Details</h3>
                </Card.Title>
                {/* <Row><hr className="mb-4" /></Row> */}
                <Row className="mb-5">
                  <Col>
                    <h5>Owner Name</h5>
                    <p>{data.entreprenuerMetaData.fname + ' ' + data.entreprenuerMetaData.lname}</p>
                    <h5>Contact</h5>
                    <p>{data.entreprenuerMetaData.contact}</p>
                  </Col>
                  <Col>
                    <h5>City</h5>
                    <p>{data.entreprenuerMetaData.city}</p>

                    <h5>Address</h5>
                    <p>{data.entreprenuerMetaData.address}</p>
                  </Col>
                </Row>
                {/* <Row><hr className="mb-4" /></Row> */}
                <Row>
                  <h5>About Entreprenuer</h5>
                  <p>{data.entreprenuerMetaData.description}</p>
                </Row>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title>
                  <h3>
                    Startup Evaluation with Artificial Intelligence
                  </h3>
                </Card.Title>
                <Row>
                  <p>
                    In today's dynamic business landscape, identifying promising investment opportunities amidst a sea of startups can be a daunting task for investors. However, with the advent of machine learning and artificial intelligence (AI), predicting startup success has become more accurate and insightful than ever before. Our innovative web application harnesses the power of these cutting-edge technologies to provide investors with invaluable predictions and insights into the future performance of startups.
                  </p>
                </Row>
                <Row className="mt-3">
                  <Col>
                    <Link to={`/predict/${e_id}`}>
                      <Button variant="dark" size="sm">
                        Predict Analytics
                      </Button>
                    </Link>
                    <Button variant="secondary" size="sm">
                      Got Questions?
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Card.Body>
          <br />
          <br />
          <Button className='mx-auto d-block mb-5 w-80' variant="dark" onClick={() => navigate(-1)}>
            Go back
          </Button>
        </Card>

        <br />
        <br />
        <br />
      </Container>
    </>
  );
}

export default Description;
