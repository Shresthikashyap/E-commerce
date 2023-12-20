import React from 'react';

const CartContext = React.createContext({
    items:[],
    product:{},
    totalAmount: 0,
    emailId: null,
    setCartUserEmail:(emailId)=>{},
    addItem:(items) => {},
    removeItem: (id) => {}
});

export default CartContext;