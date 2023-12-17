import React from "react";
import { Col } from "react-bootstrap";
// import hero from '../../public/assets/hero.png';
// import Button from '@mui/material-next/Button';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Startups from "../../components/card";
 import companyLogo from '../../pages/Home/hero.png';
 

function Home() {

   return (
      <>
        <Container>
         <Row className="pl-3" style={{ position: 'relative', height: '80vh' }}>
            <Col xs={12} md={6} className="d-flex align-items-center">
               <div style={{ color: 'black', zIndex: '1', textAlign: 'left' }}>
                  <h1>Invest in Growing Startups</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit sed ante in efficitur. Donec hendrerit sed ante in efficitur.</p>
                  <div>
                     <Button variant="dark">See More About Us</Button>
                  </div>
               </div>
            </Col>
            <Col xs={15} md={12} style={{ position: 'absolute', top: '0', right: '0', bottom: '0', left: '0' }} className="mb-3 mt-3">
               <img src={companyLogo} alt="Hero Image" style={{ objectFit: 'cover', width: '108%', height: '140%', borderRadius: '10px' }} />
            </Col>
         </Row>
      </Container>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/><br/>
<br/><br/><br/>

         <Container>


            <h2> Popular Startups</h2>
            

            <Row className="mb-3 mt-3">
               
               <Col>
                  <Startups />
               </Col>
               <Col>
                  <Startups />
               </Col>
               <Col>
                  <Startups />
               </Col>
            </Row>

            <Row className="mb-3 mt-3">
               <Col>
                  <Startups />
               </Col>
               <Col>
                  <Startups />
               </Col>
               <Col>
                  <Startups />
               </Col>
            </Row>

            <Row>
               <Col>
                  <Startups />
               </Col>
               <Col>
                  <Startups />
               </Col>
               <Col>
                  <Startups />
               </Col>
            </Row>


         </Container>


      </>

   );
}


export default Home;