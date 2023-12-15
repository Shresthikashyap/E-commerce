import React,{ useState } from 'react';
import { Container,Row,Col,Card } from 'react-bootstrap';
import RemoveProduct from './RemoveFromCart'

const cartProducts = [
    {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
    },
    {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
    },
    {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
    }
];

const CartProducts = () => {
    const [cartElements, setCartElements] = useState(cartProducts);

    const removeProduct = (productId) => {
      const itemToRemove = cartElements.find((item,index) => index === productId);
      console.log('item to remove ',itemToRemove)
      if(itemToRemove.quantity !== 1){
        itemToRemove.quantity = Number(itemToRemove.quantity)-1;

      }else{
        const updatedCart = cartElements.filter((product, index) => index !== productId);
        setCartElements(updatedCart);
      }
    }


    const productsInCart = cartElements.map((product, index) => {
        const id = Math.random().toString();
        return (
          <Col key={id} sm={3}>
            <Card className='shadow-lg'>
              <Card.Body>
                <img src={product.imageUrl} alt={product.title} />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <p>{product.quantity}</p>
                <RemoveProduct id={index} removeProduct={removeProduct} />
              </Card.Body>
            </Card>
          </Col>
        );
        });
  
    return (
      <section>
        <div>
          <Container className='mt-3'>
            <Row>
                  {productsInCart}
            </Row>
          </Container>
        </div>
      </section>
    );
  };
  
  export default CartProducts;
  