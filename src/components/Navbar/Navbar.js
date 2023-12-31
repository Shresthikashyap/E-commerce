import React, { useContext, useState } from 'react';
import { Navbar, Container, Nav, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartContext from '../../store/cart-context';
import AuthContext from '../../store/auth-context';
import Cart from '../Cart/Cart';
import './Navbar.css';

const NavbarComponent = () => {
  const cartCntxt = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const authCntxt = useContext(AuthContext);
  const isLoggedIn = authCntxt.isLoggedIn;

  const noOfCartItems = cartCntxt.items.length ;

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePlacedOrder =() =>{
    cartCntxt.removeAllItems();
  }

  return (
    <div>
    <Navbar bg="dark" expand="sm" variant="dark">
      <Container>
        {/* <Navbar.Brand >Ooga Boga</Navbar.Brand> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            {isLoggedIn && <Nav.Link as={Link} to="/home"> Home </Nav.Link>}

            {isLoggedIn && <Nav.Link as={Link} to="/store"> Store </Nav.Link>} 

            <Nav.Link as={Link} to="/about"> About </Nav.Link>
           
            <Nav.Link as={Link} to="/login"> Login </Nav.Link>

            {isLoggedIn && <Nav.Link as={Link} to="/contactus"> Contact Us </Nav.Link >}

            {isLoggedIn && <Nav.Link onClick={handleShowModal} className='cart'>
            Cart<div style={{marginLeft:'7px',fontSize:'30px'}}> 🛒</div>
            <div style={{marginLeft:'4px',color:''}}>{noOfCartItems}</div> </Nav.Link>}
            
            </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Modal for displaying the cart */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Cart />
        </Modal.Body>
        <Modal.Footer>
          <span>Total: ₹{cartCntxt.totalAmount}</span>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          {noOfCartItems!==0 && <Button variant="primary" onClick={handlePlacedOrder}>Order</Button>}
        </Modal.Footer>
      </Modal>
    </Navbar>
    <h1>Ooga Boga</h1>
    </div>
  );
};

export default NavbarComponent;