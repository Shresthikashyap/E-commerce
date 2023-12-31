import React from 'react';

const CartContext = React.createContext({
    items:[],
    product:{},
    totalAmount: 0,
    addItem:(item) => {},
    removeItem: (id) => {},
    removeAllItems:()=>{}
});

export default CartContext;