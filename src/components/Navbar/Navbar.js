import React, { useContext, useState } from 'react';
import { Navbar, Container, Nav, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartContext from '../store/cart-context';
import AuthContext from '../store/auth-context';
import Cart from './Cart/Cart'; // Import the Cart component

const YourNavbarComponent = () => {
  const cartCntxt = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const authCntxt = useContext(AuthContext);
  const isLoggedIn = authCntxt.isLoggedIn;

  const hasItems = cartCntxt.items.length > 0;

  const noOfCatItems = cartCntxt.items.reduce((currNum, item) => {
    return Number(currNum) + Number(item.quantity);
  }, 0);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Navbar bg="dark" expand="sm" variant="dark">
      <Container>
        <Navbar.Brand>Ecommerce</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            {isLoggedIn && <Nav.Link as={Link} to="/home"> Home </Nav.Link>}

            {isLoggedIn && <Nav.Link as={Link} to="/store"> Store </Nav.Link>} 

            <Nav.Link as={Link} to="/about"> About </Nav.Link>
           
            <Nav.Link as={Link} to="/login"> Login </Nav.Link>

            {isLoggedIn && <Nav.Link as={Link} to="/contactus"> Contact Us </Nav.Link >}

            {isLoggedIn && <Nav.Link onClick={handleShowModal}> 🛒{noOfCatItems} </Nav.Link>}
            
            </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Modal for displaying the cart */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Cart />
        </Modal.Body>
        <Modal.Footer>
          <span>Total: ₹{cartCntxt.totalAmount}</span>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          {hasItems && <Button variant="primary">Order</Button>}
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
};

export default YourNavbarComponent;