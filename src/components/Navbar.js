import React, { useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartContext from '../store/cart-context';

const YourNavbarComponent = () => {

  const cartCntxt = useContext(CartContext);

  const noOfCatItems = cartCntxt.items.reduce((currNum,item)=>{
    console.log('in nav ',item)
    return Number(currNum)+Number(item.quantity);
  },0)

  return (
    <Navbar bg="dark" expand="sm" variant="dark">
      <Container>
        <Navbar.Brand >Ecommerce</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/store">
              Store
            </Nav.Link>        
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/contactus">
              Contact Us
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
            🛒{noOfCatItems}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default YourNavbarComponent;
