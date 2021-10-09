import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faUserAlt, faShoppingCart, faSearch, faComments } from '@fortawesome/free-solid-svg-icons';

import whiteTextLogo from "../../../images/whiteTextLogo.png";
import "./index.css";

function MobileHeader() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={whiteTextLogo} alt="CornerCo"  />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/products"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Books
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Health & Wealth
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Community
                <span className="header__chat">
                        <FontAwesomeIcon icon={faComments} size = '2x' />
                    </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Resources
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
        <div className="header-searchout">
          <div><input type="text" className="Header__Search " placeholder="What are you looking for" /></div>
          <div className = "search-icon"><FontAwesomeIcon icon={faSearch} /></div>
        </div>
        <div className="Header__InnerDiv">
                <div className="Header__IconOuter"><FontAwesomeIcon icon={faCog} /></div>
                <div className="Header__IconOuter"><FontAwesomeIcon icon={faUserAlt} /></div>
                <div className="Header__IconOuter"><FontAwesomeIcon icon={faShoppingCart} /></div>
                <div className="Header__IconOuter"><i className="fa fa-heart" aria-hidden="true"></i></div>
        </div>
      </nav>
    </>
  );
}

export default MobileHeader;