import Section1 from "./SectionPart1/Section1";
import Section2 from "./SectionPart2/Section2";
import Section3 from "./SectionPart3/Section3";
import Section4 from "./SectionPart4/Section4";
import './home.css'

const Home = () => {

    return (
      <div className="_Home_">
        <div className='_homeInner_'>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
      </div>
    );
}


export default Home;