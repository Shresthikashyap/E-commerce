import React,{  useContext } from 'react';
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import { Button } from 'react-bootstrap';

// const cartProducts = [
//     {
//     title: 'Colors',
//     price: 100,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
//     quantity: 2,
//     },
//     {
//     title: 'Black and white Colors',
//     price: 50,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
//     quantity: 3,
//     },
//     {
//     title: 'Yellow and Black Colors',
//     price: 70,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
//     quantity: 1,
//     }
// ];

const Cart = () => {

  const cartCntxt = useContext(CartContext);
    
  const hasItems = cartCntxt.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCntxt.removeItem(id);
  }

  const cartItemAddHandler = (item) => {
    console.log('yahan par',item)
    cartCntxt.addItem({ ...item, quantity: item.quantity });
  };

const cartitems = (<div>
{cartCntxt.items.map((item) =>{
    return <CartItem 
    key={item.id} 
    id={item.id}
    name={item.title} 
    price={item.price} 
    imageUrl={item.imageUrl}
    quantity={item.quantity} 
    onRemove={cartItemRemoveHandler.bind(null,item.id)}
    onAdd={cartItemAddHandler.bind(null,item)}
    />;
}
)}
</div>
)
return (
<div >
    {cartitems}
    <div >
        <span>Total</span>
        <span>₹ {cartCntxt.totalAmount}</span>

        <div>
            {hasItems && <Button >Order</Button>}
        </div>
    </div>
</div>
)
}

export default Cart;