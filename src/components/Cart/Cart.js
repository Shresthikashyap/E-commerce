import React, { useContext } from 'react';
import { Card,Button} from 'react-bootstrap';
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
        <Card key={cartItem.item.id} >
          <Card.Body className="d-flex align-items-center">
            <div>
              <img src={cartItem.item.imageUrl} alt={cartItem.item.title} style={{ maxWidth: '80%', height: 'auto' }} />
            </div>
            <div>
              <h5>{cartItem.item.title}</h5>
              <p className="mb-1">Quantity: {cartItem.item.quantity}</p>
              <p className="mb-1">Price: ${cartItem.item.price}</p>
              <div>
                <Button variant="dark" onClick={() => cartItemRemoveHandler(cartItem._id)} style={{maxWidth: '80px'}}> - </Button>
                <Button variant="dark" onClick={() => cartItemAddHandler(cartItem.item)} style={{maxWidth: '80px'}}> + </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Cart;
