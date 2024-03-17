
import React from 'react';
import { Card } from 'react-bootstrap'; // Assuming you're using react-bootstrap for Card component
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Card1({ imageUrl, title, description, link }) {
  return (
    <Card className='card'>
      <Card.Img variant="top" src={imageUrl} style={{ height: '180px', objectFit: 'contain' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        {/* Use Link component to navigate */}
        {link && <Link to={link.url} className="btn btn-primary">{link.label}</Link>}
      </Card.Body>
    </Card>
  );
}

export default Card1;
