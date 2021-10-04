import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header/index.js";
import Home from "./Components/Home/index.js";
import Products from "./Components/Products/Product";
// import Footer from "./Components/FooterPart/Footer";
import Footer from './Components/Footer'
import './Components/CSS/Responsive/index.css'
import './Components/CSS/Heading/index.css'
import Checkout from "./Components/CheckOut/index.js";
import SingeleProduct from "./Components/Products/Singleproduct/index.js";
import Vitamins from "./Components/Products/ProductList/Vitamins/index.js";
import EssentialOils from "./Components/Products/ProductList/Oils/index.js";
import Books from "./Components/Products/ProductList/Books/index.js";
import Cart from "./Components/Cart/index.js";
import Login from "./Components/Login/index.js";
import Regiester from "./Components/Register/index.js";

import {Provider} from 'react-redux';
import store from "./Components/Redux/store.js";

function App() {
  return (
     <Provider store = {store}>
      <Router>
        {/* <Header /> */}
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Regiester} />
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path = "/checkout" component = {Checkout} />
            <Route path = "/single" component = {SingeleProduct} />
            <Route path = "/product-vitamins" component = {Vitamins} />
            <Route path = "/product-essential-oils" component ={EssentialOils} />
            <Route path = "/product-books" component ={Books} />
            <Route path = "/cart" component ={Cart} />
          </Switch>
        {/* <Footer /> */}
      </Router>
    </Provider>
  );
}

export default App;


// <Section1/>
//      <Section2/>
//      <Section3/>
//      <Section4/>