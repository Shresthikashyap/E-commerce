import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
// import Home from './components/Home/Home';
// import Store from './components/Products/Products';
// import About from './components/About/About';
// import Auth from './components/Auth/AuthForm';
// import ContactUs from './components/ContactUs/ContactUs';
// import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
// import ProductDetails from './components/Products/ProductDetails';
// import Footer from './components/Footer/Footer';

const Navbar = React.lazy(()=> import('./components/Navbar/Navbar')) ;
const Home = React.lazy(()=> import('./components/Home/Home')) ;
const Store = React.lazy(()=> import('./components/Products/Products')) ;
const About = React.lazy(()=> import('./components/About/About')) ;
const Auth = React.lazy(()=> import('./components/Auth/AuthForm')) ;
const ContactUs = React.lazy(()=> import('./components/ContactUs/ContactUs')) ;
const Cart = React.lazy(()=> import('./components/Cart/Cart')) ;
//const CartProvider = React.lazy(()=> import('./store/CartProvider')) ;
const ProductDetails = React.lazy(()=> import('./components/Products/ProductDetails')) ;
const Footer = React.lazy(()=> import('./components/Footer/Footer')) ;

const App = () => {

  return (
    <CartProvider>
      <Suspense fallback={<div style={{alignItems:'center'}}> ...Loading </div>}>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/" component={Store} exact/>
        <Route path="/store/:id" component={ProductDetails} />
        <Route path="/" component={About} />
        <Route path="/login" component={Auth} />
        <Route path="/ContactUs" component={ContactUs}/>
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
      <Footer />
      </Suspense>
    </CartProvider>
  );
};

export default App;
