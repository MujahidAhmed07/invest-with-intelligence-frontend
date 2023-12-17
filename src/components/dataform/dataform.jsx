import React from "react";
import Container from 'react-bootstrap/Container';  
function dataform() {
  return (
    <Container className='d-flex justify-content-center'>
    <form action="/submit-startup" method="POST" className='w-50 p-3 border m-5'>
      <label htmlFor="startupNam hsie">Startup Name:</label><br />
      <input type="text" id="startupName" name="startupName" /><br /><br />

      <label htmlFor="joinedDate">Startup Joined Date:</label><br />
      <input type="date" id="joinedDate" name="joinedDate" /><br /><br />

      <label htmlFor="description">Startup Description:</label><br />
      <textarea id="description" name="description" rows="4" cols="70"></textarea><br /><br />

      <label htmlFor="location">Location:</label><br />
      <input type="text" id="location" name="location" /><br /><br />

      <label htmlFor="valuation">Valuation:</label><br />
      <input type="number" id="valuation" name="valuation" /><br /><br />

      <label htmlFor="revenue">Revenue:</label><br />
      <input type="number" id="revenue" name="revenue" /><br /><br />

      <input type="submit" value="Submit" />
    </form>
    </Container>
  );
}

export default dataform;

