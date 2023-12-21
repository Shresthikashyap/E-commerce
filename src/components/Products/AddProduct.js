import { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";

const AddProduct = (props) =>{

    const cartCntxt = useContext(CartContext);

    const addToCart = (event) => {
  
      event.preventDefault();
      const quantity = props.id;
      cartCntxt.addItem({...props.items,quantity:quantity});
    }
    return (
        <div>
            <Button variant='primary' onClick={addToCart}>Add Product</Button>
        </div>
    )
}

export default AddProduct;