import { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";

const AddProduct = (props) =>{

    const cartCntxt = useContext(CartContext);

    const addToCart = (event) => {
      event.preventDefault();
      
      cartCntxt.addItem({...props.item});
    }
    return (
        <div>
            <Button variant='primary' onClick={addToCart} >Add Product</Button>
        </div>
    )
}

export default AddProduct;