import react from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Predict() {
    return (
        <Container className='d-flex justify-content-center'>
        <Form className='w-75 p-3 border m-5' action="/submit-startup" method="POST">
          <h3 className="mb-4">Upload CSV File here to predict the profit of Startup</h3>
          <br />
          <br />
          
  
            {/* <Form.Group className="mb-3" controlId="startupName"> */}
  
          <Form.Group className="mb-3" controlId="csvFile">
            <Form.Label>Choose a CSV file:</Form.Label>
            <Form.Control type="file" accept=".csv" name="csvFile" required />
          </Form.Group>
  
          <div className="d-grid">
            <Button variant="dark" type="submit">
              Predict 
            </Button>
          </div>
        </Form>
      </Container>
    );
    
}

export default Predict;
