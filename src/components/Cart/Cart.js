// Cart.js
import React, { useContext, useState } from 'react';
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import { Button, Modal } from 'react-bootstrap';

const Cart = () => {
  const cartCntxt = useContext(CartContext);
  const hasItems = cartCntxt.items.length > 0;

  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // const handleShowModal = () => {
  //   setShowModal(true);
  // };

  const cartItemRemoveHandler = (id) => {
    cartCntxt.removeItem(id);
  };
  
  const cartItemAddHandler = async(item) => {
    cartCntxt.addItem({ ...item, quantity: item.quantity });
  };
  
  return (
    <div>
      {/* <Button onClick={handleShowModal}>Open Cart</Button> */}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Your Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartCntxt.items.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              quantity={item.quantity}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
            />
          ))}
        </Modal.Body>
        <Modal.Footer>
          <span>Total: ₹{cartCntxt.totalAmount}</span>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          {hasItems && <Button variant="primary">Order</Button>}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
