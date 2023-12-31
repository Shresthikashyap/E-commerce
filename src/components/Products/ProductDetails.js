import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import AddToCart from '../Cart/AddToCart';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [loadedProduct, setLoadedProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://react-f984f-default-rtdb.firebaseio.com/products/${id}.json`);

        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }

        const data = await response.json();

        if (!data) {
          throw new Error('Product not found');
        }

        const loadedProduct = {
          id,
          title: data.title,
          price: data.price,
          imageUrl: data.imageUrl,
        };

        setLoadedProduct(loadedProduct);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProduct();
  }, [id]);

  if (error) {
    return <div className="text-danger">Error: {error}</div>;
  }

  if (!loadedProduct) {
    return <div className="text-info">Loading...</div>;
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col xs={12} md={6}>
          <img
            src={loadedProduct.imageUrl}
            alt={loadedProduct.title}
            className="img-fluid"
          />
        </Col>
        <Col xs={12} md={6}>
          <h3>{loadedProduct.title}</h3>
          <br />
          <p>${loadedProduct.price}</p>
          <p>
          Save Extra with 2 offers <br />
          Bank Offer (2): 10% Instant Discount up to INR 500 on Federal Bank Master Card Debit Card Non-EMI Trxns.<br/> 
          Min purchase value INR 2500 See AllBank Offer (2): 10% Instant Discount up to INR 500 on Federal Bank Master Card Debit Card Non-EMI Trxns.<br/> 
          Min purchase value INR 2500 See All <br />
          Partner Offers: Get GST invoice and save up to 28% on business purchases. Sign up for free DetailsPartner Offers: Get GST invoice and save up to 28% on business purchases. 
          </p>
          <AddToCart variant='danger' item={loadedProduct} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
