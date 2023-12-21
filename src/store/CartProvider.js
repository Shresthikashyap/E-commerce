import React, {useState,useEffect} from 'react';
import CartContext from './cart-context';
import axios from'axios';

const CartProvider = props => {

    const [items,updateItems] = useState([]);
    const [total,updateTotal] = useState(0);
    const [userEmail, setUserEmail] = useState('');

    
    useEffect(() => {
        const fetchData = async () => {
          try {
            // const res = await axios.delete(`https://crudcrud.com/api/787c5205e20e4fc49ebc39d0e136d045/cart`);
            // console.log('delete', res)
            const response = await axios.get(`https://crudcrud.com/api/5242010bdf4e4166a132950674a25b2b/cartdogmailcom`);
            console.log('Cart data:', response.data);
    
            if(response.data.length !== 0){
                const updatedCart = []; // Create a copy of the existing cart

                for (let i = 0; i < response.data.length; i++) {
                  const currentItem = response.data[i];
        
                  const existingItemIndex = updatedCart.findIndex((item) => item.id === currentItem.id);
                  
                  if (existingItemIndex !== -1) {
                    console.log('in if now', updatedCart[existingItemIndex])
                    // If item with the same ID exists in the cart, update its quantity
                    updatedCart[existingItemIndex].quantity = Number(updatedCart[existingItemIndex].quantity) + 1;
                  } else {
                    console.log('in else ',currentItem)
                    // If item doesn't exist in the cart, add it
                    updatedCart.push(currentItem);
                  }

                  const priceNumber = Number(total)+Number(currentItem.price);
                  updateTotal(priceNumber); 
                }
                console.log('updated cart',updatedCart)
                if(updatedCart.length !== 0){
                  updateItems(updatedCart);
                } 
            }
    
          } catch (error) {
            console.error('Error fetching cart data:', error);
          }
        };
    
        fetchData();
      }, [userEmail,total]); // Empty dependency array means this effect runs once on mount

    const addItemToCartHandler = async(item) => {

        console.log('email ' , userEmail)
        item.email = userEmail;

        const existingItemCartIndex = items.findIndex((i) => i.id === item.id);

        if(existingItemCartIndex === -1){
            item.quantity = 1;
            updateItems([...items,item]);
        }else{
            const updatedItems = [...items];
            updatedItems[existingItemCartIndex].quantity = Number(updatedItems[existingItemCartIndex].quantity)+1;
            updateItems(updatedItems);
        }

        const priceNumber = Number(total)+Number(item.price);

        updateTotal(priceNumber); 
       
        const response = await axios.post(`https://crudcrud.com/api/5242010bdf4e4166a132950674a25b2b/cartdogmailcom`,{item});
        console.log('Cart data saved successfully:', response.data);
    };

    const removeItemFromCartHandler = id =>{
        console.log('pehle ',id);

        const itemToRemove = items.find((item) => item.id === id);
        
        if(Number(itemToRemove.quantity) === 1){  
            const updatedItems = items.filter(item => item.id !== id)
            updateItems(updatedItems);
        }
        else{
            itemToRemove.quantity = Number(itemToRemove.quantity)-1;
        }

        const priceNumber = Number(total)-Number(itemToRemove.price);
        updateTotal(priceNumber);
    };
    
    const setCartUserEmailHandler = (email) => {
          let mail = email;
        if(!localStorage.getItem(email)){
           mail = localStorage.setItem('email',email);
        }else{
          localStorage.setItem('email',email);
        }
  
        setUserEmail(mail);
    };

    const cartContext = {
        items: items,
        totalAmount: total,
        emailId: userEmail,
        setCartUserEmail: setCartUserEmailHandler,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
        </CartContext.Provider>
}

export default CartProvider