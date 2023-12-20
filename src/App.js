import React, { useContext } from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Store from './components/Products/Products';
import About from './components/About/About';
import Auth from './components/Auth/AuthForm';
import ContactUs from './components/ContactUs/ContactUs';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import AuthContext from './store/auth-context'
import ProductDetails from './components/Products/ProductDetails';

const App = () => {
  const authCntxt = useContext(AuthContext);
  const isLoggedIn = authCntxt.isLoggedIn;
  return (
    <CartProvider>
    <Router>
      <Navbar />
      <Switch>
        {isLoggedIn && <Route path="/home" component={Home} />}
        {isLoggedIn && <Route path="/store" component={Store} />}
        {isLoggedIn && <Route path="/store/:id" component={ProductDetails} />}
        <Route path="/about" component={About} />
        <Route path="/login" component={Auth} />
        {isLoggedIn && <Route path="/ContactUs" component={ContactUs}/>}
        {isLoggedIn && <Route path="/cart" component={Cart} />}
      </Switch>
    </Router>
    </CartProvider>
  );
};

export default App;