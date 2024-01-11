import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { Link } from 'react-router-dom';
// import exampleImage from '../../public/assets/hero.png'; 
// Adjust the path based on your project structure



function Startups() {
  return (
    <Card className='card'>
      <Card.Img variant="top" src="logo512.png" style={{    height: '180px', objectFit: 'contain'}}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to="/Description">
                  
                
        <Button variant="primary">See Details</Button>

                </Link>
      </Card.Body>
    </Card>
  );
}

export default Startups;