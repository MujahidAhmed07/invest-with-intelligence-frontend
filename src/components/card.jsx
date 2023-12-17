import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
        <Button variant="primary">See Details</Button>
      </Card.Body>
    </Card>
  );
}

export default Startups;