import { useState, useRef, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';

import classes from './AuthForm.module.css';
import AuthContext from '../../store/auth-context';

const AuthForm = () => {
  const authCntxt = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    authCntxt.setCartUserEmail(enteredEmail);

    // validation
    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCv1ruYo50isrfGtym2fBvPk_jC8xN4EC0';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(async (res) => {
      const data = await res.json();
      console.log(data)
      if (res.ok) {
        setIsLoading(false);
        authCntxt.login(data.idToken);
      } else {
        setIsLoading(false);
        alert('Something went wrong');
      }
    });

  };

  return (

    <div className={classes.auth}>
      <h2>Login</h2>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Your Email</Form.Label>
          <Form.Control type="email" required ref={emailInputRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Your Password</Form.Label>
          <Form.Control type="password" required ref={passwordInputRef} />
        </Form.Group>

        {isLoading ? (
          <p style={{ color: 'white' }}>...Sending Request</p>
        ) : (
          <div className={classes.actions}>
            <Button variant="primary" type="submit">
              Login with existing account
            </Button>
          </div>
        )}
      </Form>
      
    </div>

  );
};

export default AuthForm;
