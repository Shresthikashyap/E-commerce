import React, { useContext } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import CartContext from '../../store/cart-context'; 

const Cart = () => {
  const cartCntxt = useContext(CartContext);

  const updatedCart = [];
  
  for (let i = 0; i < cartCntxt.items.length; i++) {
    const currentItem = cartCntxt.items[i];

    const existingItemCartIndex = updatedCart.findIndex((i) => i.item.id === currentItem.item.id)

    if(existingItemCartIndex === -1){
      currentItem.item.quantity = 1;
      updatedCart.push(currentItem);
    }else{
      updatedCart[existingItemCartIndex].item.quantity = Number(updatedCart[existingItemCartIndex].item.quantity)+1;
    }
  }

  const cartItemRemoveHandler = (id) => {
    cartCntxt.removeItem(id);
  };
  
  const cartItemAddHandler = async(item) => {
    cartCntxt.addItem({ ...item});
  };

  return (
    <div>
      {updatedCart.map((cartItem) => (
        <Card key={cartItem.item.id} className="mb-3">
          <Card.Body>
            <Row className="align-items-center">
              <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
                <img src={cartItem.item.imageUrl} alt={cartItem.item.title} style={{ maxWidth: '100%', height: 'auto' }} />
              </Col>
              <Col xs={12} md={8}>
                <h5>{cartItem.item.title}</h5>
                <p className="mb-1">Quantity: {cartItem.item.quantity}</p>
                <p className="mb-3">Price: ${cartItem.item.price}</p>
                <div className="d-flex justify-content-start">
                  <Button 
                    variant="outline-dark" 
                    onClick={() => cartItemRemoveHandler(cartItem._id)} 
                    className="me-2"
                  >
                    Remove
                  </Button>
                  <Button 
                    variant="outline-dark" 
                    onClick={() => cartItemAddHandler(cartItem.item)}
                  >
                    Add
                  </Button>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Cart;
