import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ProductDetails = ({ product, showModal, handleClose }) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{product.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={product.imageUrl} alt={product.title} style={{ maxWidth: '100%', height: 'auto' }} />
        <p>{product.title}</p>
        <p>${product.price}</p>
        {/* Add other details here */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductDetails;
