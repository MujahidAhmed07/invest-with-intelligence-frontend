import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Col, Card, Button, Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Startups from "../../components/card";
import companyLogo from '../../pages/Home/hero.png';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footers';

function Home() {
   const [data, setData] = useState([]);
   console.log(data);
   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get("http://localhost:8080/api/iwi/startup/home/");
            setData(response.data);
         } catch (error) {
            console.error('Error fetching data:', error);
         }
      };

      fetchData();
   }, []);

   if (!data) {
      return <div>Loading...</div>;
   }

   return (
      <>
         <Header />
         <Container className="mb-10 my-10">
            <Row className="pl-3" style={{ position: 'relative', height: '80vh' }}>
               <Col xs={12} md={6} className="d-flex align-items-center">
                  <div style={{ color: 'black', zIndex: '1', textAlign: 'left' }}>
                     <h1>Invest in Growing Startups</h1>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit sed ante in efficitur. Donec hendrerit sed ante in efficitur.</p>
                     <div>
                        <Link to="/About">
                           <Button variant="dark">See More About Us</Button>
                        </Link>
                     </div>
                  </div>
               </Col>
               <Col xs={15} md={12} style={{ position: 'absolute', top: '0', right: '0', bottom: '0', left: '0' }} className="mb-3 mt-3">
                  <img src={companyLogo} alt="Hero Image" style={{ objectFit: 'cover', width: '108%', height: '140%', borderRadius: '10px' }} />
               </Col>
            </Row>
         </Container>
         <br></br>
         <br></br>
         <br></br>
         <br></br>

         <Container>
            <div className="text-center mb-5">
               <h1>Popular Startups</h1>
            </div>
            <Card>
               <Card.Body>
                  <Row className="mb-3 mt-3">
                     {data.map((startup, index) => (
                        <Col key={index} xs={12} md={4}>
                           <Startups startup={startup} />
                        </Col>
                     ))}
                  </Row>
               </Card.Body>
            </Card>
         </Container>

         <Footer />
      </>
   );
}

export default Home;
