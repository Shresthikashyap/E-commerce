import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card} from 'react-bootstrap';
import AddToCart from '../Cart/AddToCart';
//import AuthContext from '../../store/auth-context';
import './Products.css';
//import CardComponent from '../UI/Card/Card'

const API_URL = 'https://react-f984f-default-rtdb.firebaseio.com/products.json';

const AvailableProducts = () => {
  // const authContext = useContext(AuthContext);
  // const history = useHistory();
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

    // if (!authContext.isLoggedIn) {
    //   history.replace('/login');
    // } else {
      fetchProducts();
    //}
  }, []);

  const productItems = products.map((product) => (
<Col key={product.id} sm={3} className="mb-4"> 
<Card.Body>
  <Card className="shadow-lg">
    <Link to={`/store/${product.id}`}>
      <Card.Img variant="top" src={product.imageUrl} alt={product.title} className="content-img" />
    </Link>   
    </Card>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>₹ {product.price}</Card.Text>
      <div className='addtocart-button'>
        <AddToCart  item={product} />      
      </div>      

    </Card.Body>
</Col>
  ));

  return (
      <section>
        <Container className='mt-3'>
          {loading && <p className="loading">Loading...</p>}
          {error && <p className="error">Error: {error}</p>}
          {!loading && !error && (
            <div>
              <Row>{productItems}</Row>
            </div>
          )}
        </Container>
      </section>
  );
};

export default AvailableProducts;
