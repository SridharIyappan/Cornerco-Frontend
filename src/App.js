import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header/index.js";
import Home from "./Components/Home/index.js";
import Products from "./Components/Products/Product";
// import Footer from "./Components/FooterPart/Footer";
import Footer from "./Components/Footer";
import "./Components/CSS/Responsive/index.css";
import "./Components/CSS/Heading/index.css";
import Checkout from "./Components/CheckOut/index.js";
import SingeleProduct from "./Components/Products/Singleproduct/index.js";
import Vitamins from "./Components/Products/ProductList/Vitamins/index.js";
import EssentialOils from "./Components/Products/ProductList/Oils/index.js";
import Books from "./Components/Products/ProductList/Books/index.js";
import Cart from "./Components/Cart/index.js";
import FavoriteProducts from "./Components/Favorite/index.js";
import Login from "./Components/Login/index.js";
import Regiester from "./Components/Register/index.js";

import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "./Components/Redux/reduxCart/cartActions.js";
import MyOrders from "./Components/MyOrders/index.js";
import { Popper } from "./Components/pop.js";
import HealthAndWealth from "./Components/Health&Wealth/index.js";
import Community from "./Components/Community/index.js";
import Resources from "./Components/Resources/index.js";

function App() {
  const dispatch = useDispatch();

  const url = "http://18.223.43.173:3001/api/products";

  useEffect(() => {
    fetchAPI();
  }, [url]);

  const fetchAPI = async () => {
    try {
      const products = await axios.get(url);
      dispatch(setProducts(products.data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Regiester} />
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/product/:id" component={SingeleProduct} />
        <Route exact path="/product-vitamins" component={Vitamins} />
        <Route exact path="/product-essential-oils" component={EssentialOils} />
        <Route exact path="/product-books" component={Books} />
        <Route exact path="/cart" component={Cart} />
         {/* <Route exact path = "/favorite" component ={FavoriteProducts} />  */}
         <Route exact path="/my-orders" component={MyOrders} />
        <Route exact path="/popper" component={Popper} />
        <Route exact path="/health-wealth" component={HealthAndWealth} />
        <Route exact path="/community" component={Community} />
        <Route exact path="/resources" component={Resources} />
      </Switch> 
      <Footer />
    </Router>
  );
}

export default App;
