import React, { useContext, useState } from 'react';
import { Navbar, Container, Nav, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartContext from '../../store/cart-context';
import AuthContext from '../../store/auth-context';
import Header from '../../Header/Header';
import Cart from '../Cart/Cart';
import './Navbar.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const NavbarComponent = () => {
  const cartCntxt = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const authCntxt = useContext(AuthContext);
  const isLoggedIn = authCntxt.isLoggedIn;
  const history = useHistory();

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

  const logOutHandler = () => {
    authCntxt.logout();
    history.replace('/about');
  }

  return (
    <div>
    <Navbar bg="dark" expand="sm" variant="dark">
      <Container>
        {isLoggedIn && <Button variant='secondary'  className='logout-button' onClick={logOutHandler}> LogOut </Button>}

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
    <Header />
    </div>
  );
};

export default NavbarComponent;