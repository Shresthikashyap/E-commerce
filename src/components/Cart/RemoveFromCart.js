import { Button } from "react-bootstrap";

const RemoveProduct = (props) =>{


    const removeFromCart = (event) => {
      event.preventDefault();
      console.log('no id ',props.id)
      props.removeProduct(props.id);
     
    }
    return (
        <div>
            <Button variant='primary' onClick={removeFromCart}>Remove Product</Button>
        </div>
    )
}

export default RemoveProduct;