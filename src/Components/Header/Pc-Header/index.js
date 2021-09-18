import React from 'react';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./HeadCss.css";
import whiteTextLogo from "../../../images/whiteTextLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faUserAlt, faShoppingCart, faSearch, faComments } from '@fortawesome/free-solid-svg-icons';

const PcHeader = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
       <div>
            <div className="Header__OuterDiv">
            <img src={whiteTextLogo} alt="CornerCo" className="Header__OuterImage" />
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

                <div className="nav-link">
                <NavLink
                    exact
                    to="/"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                    >
                    Home
                </NavLink>
               </div>
                 
               <div className="nav-link">
                <NavLink
                    exact
                    to="/products"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                    >
                    Product
                </NavLink>
               </div>
                
               <div className="nav-link">
                <NavLink
                    exact
                    to="/books"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                    >
                    Books
                </NavLink>
               </div>
               <div className="nav-link">
                <NavLink
                    exact
                    to="/health&wealth"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                    >
                    Health & Wealth
                </NavLink>
              </div>
               <div className="nav-link">
                <NavLink
                    exact
                    to="/community"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                    >
                    Community 
                </NavLink>              
                    <span className="Header__Chat">
                        <FontAwesomeIcon icon={faComments} size = '2x' />
                    </span>
               </div>
               <div className="nav-link">
                <NavLink
                    exact
                    to="/resources"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                    >
                    Resources
                </NavLink>
               </div>
          </div>
           

       </div>
    )
}

export default PcHeader;