import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Products from './components/Products/Products'

function App() {
  return (
    <>
      <Navbar bg="primary" expand="sm" varient="dark">
        <Container>
          <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
        </Container>
      </Navbar>
      <Products/>
    </>
  );
}

export default App;
