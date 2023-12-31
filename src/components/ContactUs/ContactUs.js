import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import classes from './ContactUs.module.css';
// import Card from '../UI/Card/Card'

const ContactUsForm = () => {
  const [setName, updateSetName] = useState('');
  const [setEmail, updateSetEmail] = useState('');
  const [setPhonenumber, updateSetPhonenumber] = useState('');

  const updateNameHandler = (event) => {
    updateSetName(event.target.value);
  };

  const updateEmailHandler = (event) => {
    updateSetEmail(event.target.value);
  };

  const updatePhonenumberHandler = (event) => {
    updateSetPhonenumber(event.target.value);
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    const userData = {
      name: setName,
      email: setEmail,
      phonenumber: setPhonenumber,
    };

    const response = await fetch('https://react-f984f-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log('post ', data);
    alert('Data sent successfully');

    updateSetName('');
    updateSetEmail('');
    updateSetPhonenumber('');
  };

  return (
  
    <div className={classes.form}>
      <h2>Enter your Details</h2>
      <Form onSubmit={formSubmitHandler}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={setName} onChange={updateNameHandler} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={setEmail} onChange={updateEmailHandler} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhonenumber">
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="text" value={setPhonenumber} onChange={updatePhonenumberHandler} />
        </Form.Group>

        <Button variant="dark" type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
};

export default ContactUsForm;
