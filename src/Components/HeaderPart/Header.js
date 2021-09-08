import React from 'react'
import "./HeadCss.css";
import Group2 from "../../images/Group2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faUserAlt, faShoppingCart, faSearch, faComments } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
       <div>
            <div className="Header__OuterDiv">
            <img src={Group2} alt="CornerCo" className="Header__OuterImage" />
            <div className="Header__Searchout">
                <div><input type="text" className="Header__Search " placeholder="What are you looking for" /></div>
                <div><FontAwesomeIcon icon={faSearch} /></div>
            </div>
            <div className="Header__InnerDiv">
                <div className="Header__IconOuter"><FontAwesomeIcon icon={faCog} /></div>
                <div className="Header__IconOuter"><FontAwesomeIcon icon={faUserAlt} /></div>
                <div className="Header__IconOuter"><FontAwesomeIcon icon={faShoppingCart} /></div>
            </div>
        </div>

          
          <div className="Header__SectionOuter">
               <div></div>
               <div>Products</div>
               <div>Books</div>
               <div>Health & Wealth</div>
               <div>Community <span className="Header__Chat"><FontAwesomeIcon icon={faComments} size = '2x' /></span></div>
               <div>Resources</div>
               <div></div>
          </div>
           

       </div>
    )
}

export default Header
