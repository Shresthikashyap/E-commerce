// CartItem.js
import { Row, Col, Button, Card, Container } from "react-bootstrap";

const CartItem = (props) => {
  return (
    <Container className='mt-3'>
      <Row>
        <Col sm={8}>
          <Card className='shadow-lg'>
            <Card.Body>
              <img src={props.imageUrl} alt={props.name} style={{ maxWidth: '100%', height: 'auto' }} />
              <h2>{props.name}</h2>
              <span>{props.price}</span>
              <span>x {props.quantity}</span>
              <Button onClick={props.onRemove}>-</Button>
              <Button onClick={props.onAdd}>+</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CartItem;
