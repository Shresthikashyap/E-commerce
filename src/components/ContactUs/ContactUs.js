import {useState} from 'react';
import classes from './ContactUs.module.css'

const ContactUsForm = () => {

    const [setName,updateSetName] = useState('');
    const [setEmail,updateSetEmail] = useState('');
    const [setPhonenumber,updateSetPhonenumber] = useState('');

    const updateNameHandler = (event) =>{
        updateSetName(event.target.value);
    }

    const updateEmailHandler = (event) =>{
        updateSetEmail(event.target.value);
    }

    const updatePhonenumberHandler = (event) =>{
        updateSetPhonenumber(event.target.value);
    }

    const formSubmitHandler = async(event) =>{
        event.preventDefault();
    
        const userData ={
            name:setName,
            email:setEmail,
            phonenumber:setPhonenumber
        }
        
        const response = await fetch('https://react-f984f-default-rtdb.firebaseio.com/movies.json',{
            method:'POST',
            body: JSON.stringify(userData),
            headers:{
              'Content-Type':'application/json'
            }
        });
      
        const data = await response.json();
        console.log('post ',data);
        alert('data send successfully')

        updateSetName('');
        updateSetEmail('');
        updateSetPhonenumber('');
    }

    return(
        <div className={classes.form}>
            <h2>Enter your Details</h2>
            <form onSubmit={formSubmitHandler}>
                <label>Name</label>
                <input type="text" value={setName} onChange={updateNameHandler}/>
                <label>Email</label>
                <input type="email" value={setEmail} onChange={updateEmailHandler}/>
                <label>Phone number</label>
                <input type="phonenumber" value={setPhonenumber} onChange={updatePhonenumberHandler}/>  
                <button>send</button>                          
            </form>
        </div>
    )
}

export default ContactUsForm;