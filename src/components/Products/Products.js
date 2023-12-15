import React from 'react';
import { Container,Row,Col,Card} from 'react-bootstrap';
import AddToCart from '../Cart/AddToCart';

const Products = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];


const AvailableProducts = () => {

  const availableProducts = Products.map((product, index) => (
          
          <Col key={Math.random().toString()}  sm={3}>
            <Card className='shadow-lg'>
              <Card.Body>
            <img src={product.imageUrl} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <AddToCart varient='danger' item={product}/>
            </Card.Body>
            </Card>
          </Col>
  ));

  return (
    <section>
      <div>
        <Container className='mt-3'>
          <Row>
                {availableProducts}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default AvailableProducts;
