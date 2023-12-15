import React from 'react';
import { Container,Row,Col,Card} from 'react-bootstrap';
import AddToCart from '../Cart/AddToCart';

const Products = [
  {
    id:'p1',
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    id:'p2',
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    id:'p3',
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    id:'p4',
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
                <div id={product.id} />
                <img src={product.imageUrl} alt={product.title} style={{ maxWidth: '100%', height: 'auto' }}/>
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
