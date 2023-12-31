import React from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Store from './components/Products/Products';
import About from './components/About/About';
import Auth from './components/Auth/AuthForm';
import ContactUs from './components/ContactUs/ContactUs';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import ProductDetails from './components/Products/ProductDetails';
import Footer from './components/Footer/Footer';

const App = () => {

  return (
    <CartProvider>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/store" component={Store} exact/>
        <Route path="/store/:id" component={ProductDetails} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Auth} />
        <Route path="/ContactUs" component={ContactUs}/>
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>

      <Footer />
    </CartProvider>
  );
};

export default App;