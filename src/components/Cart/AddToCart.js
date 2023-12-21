import { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";

const AddProduct = (props) =>{

    const cartCntxt = useContext(CartContext);
    const userEmail = cartCntxt.emailId;

    const addToCart = (event) => {
      event.preventDefault();

      console.log('in add ',props);   
      props.item.email = userEmail;
      const quantity = props.item.quantity;
      cartCntxt.addItem({...props.item,quantity:quantity});
    }
    return (
        <div>
            <Button variant='primary' onClick={addToCart} >Add Product</Button>
        </div>
    )
}

export default AddProduct;