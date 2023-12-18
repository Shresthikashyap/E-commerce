import { useState, useRef, useContext } from 'react';

import classes from './AuthForm.module.css';
import AuthContext from '../../store/auth-context';
//import userEvent from '@testing-library/user-event';

const AuthForm = () => {

  const authCntxt = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLoading, setIsLoading] = useState(false);


  const submitHandler = (event) =>{
    event.preventDefault();
    setIsLoading(true);
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //validation
    let url ='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCv1ruYo50isrfGtym2fBvPk_jC8xN4EC0';

    fetch(url,{
        method:'POST',
        body: JSON.stringify({
          email:enteredEmail,
          password:enteredPassword,
          returnSecureToken: true
        }),
        headers:{
          'Content-Type':'application/json'
        }
      }).then(async(res)=>{
       
        const data= await res.json();
        if(res.ok){
          setIsLoading(false);
          authCntxt.login(data.idToken);
          console.log('done')
        }
        else{
          setIsLoading(false);
          alert('somethings wrong',res);
          return res.json().then((data)=>{
            console.log(data);
          })
        }
      })
  }
  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        {isLoading ? <p style={{color:'white'}}>...Sending Request</p>
          :  
          <div className={classes.actions}>
             <button>Login with existing account</button> 
          </div>
          }
      </form>
    </section>
  );
};

export default AuthForm;
