import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header/index.js";
import Home from "./Components/Home/index.js";
import Products from "./Components/Products/Product";
import Footer from "./Components/FooterPart/Footer";

import './Components/CSS/Responsive/index.css'
import './Components/CSS/Heading/index.css'

function App() {
  return (
     <>
      <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            {/* <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} /> */}
          </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;


// <Section1/>
//      <Section2/>
//      <Section3/>
//      <Section4/>