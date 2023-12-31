import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AddToCart from '../Cart/AddToCart';
import AuthContext from '../../store/auth-context';
import './Products.css';
import CardComponent from '../UI/Card/Card'

const API_URL = 'https://react-f984f-default-rtdb.firebaseio.com/products.json';

const AvailableProducts = () => {
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();

        const loadedProducts = [];
        for (const key in data) {
          loadedProducts.push({
            id: key,
            title: data[key].title,
            price: data[key].price,
            imageUrl: data[key].imageUrl,
          });
        }

        setProducts(loadedProducts);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    if (!authContext.isLoggedIn) {
      history.replace('/login');
    } else {
      fetchProducts();
    }
  }, [authContext.isLoggedIn, history]);

  const productItems = products.map((product) => (
    <Col key={product.id} sm={3} >
      <Card className='shadow-lg'>
        <Card.Body>
          <img src={product.imageUrl} alt={product.title} className='content-img'/>
          <h3>{product.title}</h3>
          <p> ₹ {product.price}</p>
          <Link to={`/store/${product.id}`}>
            <button>View Product</button>
          </Link>
          <AddToCart variant='danger' item={product} />
        </Card.Body>
      </Card>
    </Col>
  ));


  return (
    <CardComponent>
    <section>
      <Container className='mt-3'>
      {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">Error: {error}</p>}
        {!loading && !error && (
          <div className='item-content'>
            <Row>{productItems}</Row>
          </div>
        )}
      </Container>
    </section>
    </CardComponent>
  );
};

export default AvailableProducts;
