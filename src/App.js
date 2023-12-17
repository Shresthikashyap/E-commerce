import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Store from './components/Products/Products';
import ShowProduct from './components/Products/ShowProduct'
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

const App = () => {
  return (
    <CartProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:id" component={<ShowProduct/>} />
        <Route path="/about" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
    </CartProvider>
  );
};

export default App;