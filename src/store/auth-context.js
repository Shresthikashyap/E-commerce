import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext({
    token:'',
    isLoggedIn: false,
    emailId: null,
    setCartUserEmail:(emailId)=>{},
    login:(token)=>{},
    logout:()=>{}
})

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const [token,setToken] = useState(initialToken);
    const [userEmail, setUserEmail] = useState('');


    const userIsLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token',token);
    }
    
    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
    }

    const setCartUserEmailHandler = (email) => {
        let mail = email;
        if (localStorage.getItem(email) !== null) {
          mail = localStorage.setItem('email', email);
        } else {
          localStorage.setItem('email', email);
        }
     
        const mailId =   mail.replace(/[@.]/g, '');
        setUserEmail(mailId);
    };

    const contextValue = {
        token:token,
        isLoggedIn: userIsLoggedIn,
        emailId: userEmail,
        setCartUserEmail: setCartUserEmailHandler,
        login: loginHandler,
        logout: logoutHandler
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;