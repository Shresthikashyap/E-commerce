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
            const response = await axios.get(`https://crudcrud.com/api/c83c4443fefd41db8d3cb51da2be5cc6/cart`);
            console.log('Cart data:', response.data);
    
            const cartObject = JSON.parse(response.data);
            // const cartObjectWithEmail = cartObject.filter((cartItem) => cartItem.email === userEmail);
            // console.log('in use effect ',cartObjectWithEmail)
            updateItems(cartObject.data);
    
          } catch (error) {
            console.error('Error fetching cart data:', error);
          }
        };
    
        fetchData();
      }, [userEmail]); // Empty dependency array means this effect runs once on mount

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
        
        const data = JSON.stringify(item);
        const response = await axios.post(`https://crudcrud.com/api/c83c4443fefd41db8d3cb51da2be5cc6/cart`,{data});
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
        setUserEmail(email);
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