import React, {useState} from 'react';
import CartContext from './cart-context';

const CartProvider = props => {

    const [items,updateItems] = useState([]);
    const [total,updateTotal] = useState(0);
    

    const addItemToCartHandler = item =>{
        
        const existingItemCartIndex = items.findIndex((i) => i.id === item.id)
        
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

    const cartContext = {
        items: items,
        totalAmount: total,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
        </CartContext.Provider>
}

export default CartProvider