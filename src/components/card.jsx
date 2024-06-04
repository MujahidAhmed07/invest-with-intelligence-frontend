import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";
import { Link } from 'react-router-dom';


function Startups({ startup }) {

  return (
    <Card className='card'>
      <Card.Img variant="top" src={require('./startup.png')} style={{ height: '180px', objectFit: 'contain' }} />
      <Card.Body>
        <Card.Title>{startup.startupName}</Card.Title>
        <Card.Text>
          {startup.startupShortDetails}
        </Card.Text>
        <Link to={`/Description/${startup.startup_id}`}>
          <Button variant="primary">See Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Startups;