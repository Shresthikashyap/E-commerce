import { useContext } from "react";
import { Button } from "react-bootstrap";
import AuthContext from "../../store/auth-context"; 
import CartContext from "../../store/cart-context"; 
import './AddToCart.css'; 
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
//import Card from "../UI/Card/Card";

const AddProduct = (props) => {
  const authContext = useContext(AuthContext);
  const cartCntxt = useContext(CartContext);
  const history = useHistory();

  const addToCart = (event) => {
   //  event.preventDefault();
    cartCntxt.addItem({ ...props.item });
  };

  const handleClick = () => {
    if (authContext.isLoggedIn) {
      addToCart();
    } else {
      alert('You need to log in!')
      history.replace('/login');
    }
  };

  return (
    <div className="card">
      <Button variant="dark" onClick={handleClick} className="card">
        Add Product
      </Button>
    </div>
  );
};

export default AddProduct;
