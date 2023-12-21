// Cart.js
import React, { useContext } from 'react';
import { Card,Button } from 'react-bootstrap';
import CartContext from '../../store/cart-context';

const Cart = () => {
  const cartCntxt = useContext(CartContext);
  const userEmail = cartCntxt.emailId;

  const cartItemRemoveHandler = (id) => {
    cartCntxt.removeItem(id);
  };
  
  const cartItemAddHandler = async(item) => {
    cartCntxt.addItem({ ...item, quantity: item.quantity });
  };

  return (
    <div>
      {cartCntxt.items.filter((item) => item.email === userEmail).map((item) => (
        <Card key={item.id}>
          <Card.Body>
            {/* Render cart item details here */}
            <p>{item.title}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price * item.quantity}</p>
            <Button variant="primary" onClick={cartItemRemoveHandler.bind(null, item.id)}>-</Button>
            <Button variant="primary" onClick={cartItemAddHandler.bind(null, item)}>+</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Cart;
