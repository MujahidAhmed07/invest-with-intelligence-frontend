import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

function Header1() {
  const navLinkStyle = {
    color: 'white',

  };

  return (
    <>
      <Navbar bg="dark" variant="dark" >
        <Container className='head'>
          <Navbar.Brand as={Link} to="/">Invest with Intelligence</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to="/" style={navLinkStyle}>Home</Nav.Link>
            <Nav.Link as={Link} to="/invest" style={navLinkStyle}>Invest</Nav.Link>
            <Nav.Link as={Link} to="/About" style={navLinkStyle}>About</Nav.Link>
            <Nav.Link as={Link} to="/signin" style={navLinkStyle}>Sign In</Nav.Link>
            <Nav.Link as={Link} to="/signup" style={{ ...navLinkStyle, backgroundColor: 'grey', borderRadius: 17, }}>
              Register
            </Nav.Link>
            <Nav.Link as={Link} to="/admin-login" style={navLinkStyle}>{<ManageAccountsIcon />}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header1;
