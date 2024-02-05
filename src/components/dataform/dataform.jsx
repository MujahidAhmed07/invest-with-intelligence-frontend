import React from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function DataForm() {
  return (
    <Container className='d-flex justify-content-center'>
      <Form className='w-75 p-3 border m-5' action="/submit-startup" method="POST">
        <h3 className="mb-4">Startup Data</h3>

        <Form.Group className="mb-3" controlId="startupName">
          <Form.Label>Startup Name</Form.Label>
          <Form.Control type="text" placeholder="Investo" required name="Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="joinedDate">
          <Form.Label>Startup Joined Date:</Form.Label>
          <Form.Control type="date" name="joinedDate" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Startup Description:</Form.Label>
          <Form.Control as="textarea" rows={4} name="description" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="location">
          <Form.Label>Location:</Form.Label>
          <Form.Control type="text" name="location" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="valuation">
          <Form.Label>Valuation:</Form.Label>
          <Form.Control type="number" name="valuation" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="revenue">
          <Form.Label>Revenue:</Form.Label>
          <Form.Control type="number" name="revenue" />
        </Form.Group>

        <div className="d-grid">
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default DataForm;
