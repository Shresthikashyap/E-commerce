// AddProduct.js

import { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import './AddToCart.css';
//import Card from "../UI/Card/Card";

const AddProduct = (props) => {
  const cartCntxt = useContext(CartContext);

  const addToCart = (event) => {
    event.preventDefault();
    cartCntxt.addItem({ ...props.item });
  };

  return (
    <div className="card">
      <Button variant="dark" onClick={addToCart} className="card">
        Add Product
      </Button>
    </div>
  );
};

export default AddProduct;
