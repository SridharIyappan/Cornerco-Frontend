
import Header from "./Components/HeaderPart/Header";
import Section1 from "./Components/SectionPart1/Section1";
import Section2 from "./Components/SectionPart2/Section2";
import Section3 from "./Components/SectionPart3/Section3";
import Section4 from "./Components/SectionPart4/Section4";
import Products from "./Components/Products/Product";
import Footer from "./Components/FooterPart/Footer";

import './Components/CSS/Responsive/index.css'
import './Components/CSS/Heading/index.css'

function App() {
  return (
    <div>
      <Header />
      <Products />
     <Section1/>
     <Section2/>
     <Section3/>
     <Section4/>
     <Footer/>
    </div>
  );
}

export default App;
