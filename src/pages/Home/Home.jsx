import React from "react";
import { Col, Button, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Card from "../../components/Card"; // Import the Card component
import companyLogo from '../../pages/Home/hero.png';
import startupimage from '../../pages/Home/startup.png';
import Mg from '../../pages/Home/Mg.png';
import Getty from '../../pages/Home/GettyImages.png';
import Tech from '../../pages/Home/fintech.png';
import Eco from '../../pages/Home/download.png';
import Health from '../../pages/Home/de.png';
import Food from '../../pages/Home/food.png';
import Fin from '../../pages/Home/fashion.png';
import Travel from '../../pages/Home/clean.png';

function Home() {
   return (
      <>
         <Container>
            <Row className="pl-3" style={{ position: 'relative', height: '80vh' }}>
               <Col xs={12} md={6} className="d-flex align-items-center" >
                  <div style={{ color: 'black', zIndex: '1', textAlign: 'left', marginLeft:'13%' }}>
                     <h1 style={{ color: 'black' }}>Invest in Growing Startups</h1>
                     <br />
                     <p>          This project is all about making startup investments less of a gamble. Starting a business is thrilling, but it's risky too. Nobody wants to pour money into something without a good idea of what they'll get back. Traditional market research can give you a rough estimate, but the market is so unpredictable that it's hard to be sure about future profits. That's where our solution steps in. We're using machine learning to create a tool that predicts how much profit a startup might make. </p>
                     <div>
                        <br />
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
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         
        

         <Container>
            <h1 style={{ color: 'black', zIndex: '1', textAlign: 'left', marginLeft:'5%' }}> Popular Startups</h1>
           <br />
          
           <Row className="mb-3 mt-3">
  <Col md={4} sm={6} xs={12}>
    <Card
      imageUrl={Health} 
      title="TechHub"
      description="TechHub provides a platform for technology startups to collaborate, innovate, and grow together. Join us to be part of the next big thing in tech!"
      link={{ url: "/description", label: "View Details" }}
    />
  </Col>
  <Col md={4} sm={6} xs={12}>
    <Card
      imageUrl={Getty} 
      title="EcoGrowth"
      description="EcoGrowth is dedicated to developing sustainable solutions for environmental challenges. Join us in creating a greener future for generations to come."
      link={{ url: "/description", label: "View Details" }}
    />
  </Col>
  <Col md={4} sm={6} xs={12}>
    <Card
      imageUrl={Mg} 
      title="Healthify"
      description="Healthify is revolutionizing healthcare with innovative digital solutions. Join our mission to make healthcare more accessible and efficient for everyone."
      link={{ url: "/description", label: "View Details" }}
    />
  </Col>
</Row>
<br />
<Row className="mb-3 mt-3">
  <Col md={4} sm={6} xs={12}>
    <Card
      imageUrl={Food} 
      title="FoodTech"
      description="FoodTech is disrupting the food industry with cutting-edge technology. Join us in creating the future of food delivery and sustainable agriculture."
      link={{ url: "/description", label: "View Details" }}
    />
  </Col>
  <Col md={4} sm={6} xs={12}>
    <Card
      imageUrl={Tech}
      title="FinTech Solutions"
      description="FinTech Solutions is reshaping the financial landscape with innovative financial technologies. Join us in revolutionizing banking, payments, and investments."
      link={{ url: "/description", label: "View Details" }}
    />
  </Col>
  <Col md={4} sm={6} xs={12}>
    <Card
      imageUrl={Eco} 
      title="TravelEase"
      description="TravelEase is reimagining travel experiences with seamless booking, personalized recommendations, and community-driven insights. Join us on your next adventure!"
      link={{ url: "/description", label: "View Details" }}
    />
  </Col>
</Row>
<br />
<Row className="mb-3 mt-3">
  <Col md={4} sm={6} xs={12}>
    <Card
      imageUrl={startupimage} 
      title="EdTech Innovations"
      description="EdTech Innovations is transforming education through interactive learning platforms, personalized content, and data-driven insights. Join us in shaping the future of education."
      link={{ url: "/description", label: "View Details" }}
    />
  </Col>
  <Col md={4} sm={6} xs={12}>
    <Card
      imageUrl={Fin} 
      title="FashionForward"
      description="FashionForward is disrupting the fashion industry with sustainable and ethical practices. Join us in creating a more conscious and inclusive fashion world."
      link={{ url: "/description", label: "View Details" }}
    />
  </Col>
  <Col md={4} sm={6} xs={12}>
    <Card
      imageUrl={Travel} 
      title="CleanEnergy Solutions"
      description="CleanEnergy Solutions is leading the charge towards a renewable energy future with innovative technologies and scalable solutions. Join us in powering the world sustainably."
      link={{ url: "/description", label: "View Details" }}
    />
  </Col>
</Row>

   
           
         </Container>
      </>
   );
}

export default Home;
