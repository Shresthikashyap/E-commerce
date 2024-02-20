import React, { useState, useEffect, useContext } from 'react';
import CartContext from './cart-context';
import axios from 'axios';
import AuthContext from './auth-context';

const CartProvider = (props) => {

  const authCntxt = useContext(AuthContext);
  const email = authCntxt.emailId;
  const [items, updateItems] = useState([]);
  const [total, updateTotal] = useState(0);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://crudcrud.com/api/32ec17fca1f447888121f146c78dbbe8/${email}`);
      console.log('Cart data:', response.data);
       //if(!isNaN(response.data[0]._id)){
          updateItems(response.data);    
       //}
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };
    
  fetchData();
}, [email]);


  const addItemToCartHandler = async(item) => { 
      try {
      const response = await axios.post(`https://crudcrud.com/api/32ec17fca1f447888121f146c78dbbe8/${email}`, { item });
      console.log('Cart data saved successfully:', response.data);
      const newItem = response.data;

      alert('Item Added Successfully')
      const existingItemCartIndex = items.findIndex((i) => i.item.id === newItem.item.id);
     
      if (existingItemCartIndex === -1) {
        newItem.item.quantity = 1;
        updateItems([...items, newItem]);
      } else {      
        const updatedItems = [...items];
        const newQuantity =  Number(updatedItems[existingItemCartIndex].item.quantity) + 1;
        newItem.item.quantity = newQuantity;
        updateItems([...items,newItem]);
      }
      const priceNumber = Number(total) + Number(newItem.item.price);
      updateTotal(priceNumber);

    } catch (error) {
      console.error('Error saving cart data:', error);
    }
  };

  const removeItemFromCartHandler = async (_id) => {

    try {
      const response = await axios.delete(`https://crudcrud.com/api/32ec17fca1f447888121f146c78dbbe8/${email}/${_id}`);
      console.log('Item removed successfully:', response);
         
        const removedItemIndex = items.findIndex((i) => i._id === _id);
       
        const updatedItems = [...items];
        const priceNumber = Number(total) - Number(updatedItems[removedItemIndex].item.price);         
        updateTotal(priceNumber);
  
        const filteredItems = items.filter(item => item._id !== _id)
        updateItems(filteredItems);
        
        alert('Item removed successfully!'); 
      } catch (error) {
      alert('sorry')
      console.error('Error removing item:', error);
    }
  }

  const removeAllItemsFromCartHandler = async() =>{
    
    try{
        for(let i=0;i<items.length;i++){
        const response = await axios.delete(`https://crudcrud.com/api/32ec17fca1f447888121f146c78dbbe8/${email}/${items[i]._id}`);
        console.log('Items removed successfully:', response);
        }
        updateItems([]);
        updateTotal(0);
        alert('Your Order is Placed Succesfully')
      } catch (error) {
        alert('something went wrong')
        console.error('Error removing items:', error);
    }
  }
  
  const cartContext = {
    items: items,
    totalAmount: total,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    removeAllItems: removeAllItemsFromCartHandler
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
