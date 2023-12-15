import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
//import Home from './components/';
import Store from './components/Products/Products';
import About from './components/About/About';
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;