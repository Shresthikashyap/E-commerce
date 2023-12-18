import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Store from './components/Products/Products';
import ShowProduct from './components/Products/ShowProduct'
import About from './components/About/About';
import Auth from './components/Auth/AuthForm';
import ContactUs from './components/ContactUs/ContactUs';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import AuthContext from './store/auth-context'

const App = () => {
  const authCntxt = useContext(AuthContext);
  const isLoggedIn = authCntxt.isLoggedIn;
  return (
    <CartProvider>
    <Router>
      <Navbar />
      <Routes>
        {isLoggedIn && <Route path="/home" element={<Home />} />}
        {isLoggedIn && <Route path="/store" element={<Store />} />}
        {isLoggedIn && <Route path="/store/:id" element={<ShowProduct/>} />}
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Auth />} />
        {isLoggedIn && <Route path="/ContactUs" element={<ContactUs/>}/>}
        {isLoggedIn && <Route path="/cart" element={<Cart />} />}
      </Routes>
    </Router>
    </CartProvider>
  );
};

export default App;