import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSearch,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

import { removeUser } from "../../Redux/reduxCart/cartActions";
import FavoriteProducts from "../../Favorite";

import whiteTextLogo from "../../../images/whiteTextLogo.png";
import "./index.css";

function MobileHeader() {
  const user = useSelector((state) => state.cart.user);

  const dispatch = useDispatch();
  const [login, setLogin] = useState(false);
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (user.email) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  });

  const handleClick = () => setClick(!click);

  const signOut = () => {
    dispatch(removeUser());
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={whiteTextLogo} alt="CornerCo" />
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
                  <FontAwesomeIcon icon={faComments} size="2x" />
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
          <div>
            <input
              type="text"
              className="Header__Search "
              placeholder="What are you looking for"
            />
          </div>
          <div className="search-icon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
        <div className="Header__InnerDiv">
          {login ? (
            <div className="Header__IconOuter dropdown">
              <i
                class="fa fa-user dropdown-toggle"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-hidden="true"
              ></i>
              <ul
                class="dropdown-menu profile-dropdown"
                aria-labelledby="dropdownMenuButton1"
              >
                <li class="dropdown-item">
                  <h3>{user.name}</h3>
                  <h3>{user.email}</h3>
                </li>
                <hr />
                <li class="dropdown-item">
                  <NavLink exact to="/my-orders" className="nav-orders">
                    <h3>
                      <i class="fa fa-gift" aria-hidden="true"></i> My Orders
                    </h3>
                  </NavLink>
                  <h3>
                    <i class="fa fa-credit-card" aria-hidden="true"></i>{" "}
                    Transactions
                  </h3>
                </li>
                <hr />
                <NavLink exact to="/login" className="nav-orders">
                  <li class="dropdown-item">
                    <h3 onClick={() => signOut()}>Signout</h3>
                  </li>
                </NavLink>
              </ul>
            </div>
          ) : (
            <Link exact to="/login">
              <div className="Header__IconOuter">
                <i class="fa fa-user" />
              </div>
            </Link>
          )}
          <Link exact to="/cart">
            <div className="Header__IconOuter">
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
          </Link>
          <Popup
            trigger={
                <div className="Header__IconOuter">
                  <i className="fa fa-heart" aria-hidden="true"></i>
                </div>
            }
            position="bottom right"
            className="popup"
          >
            <FavoriteProducts />
          </Popup>
          {/* <div className="Header__IconOuter">
            <i className="fa fa-heart" aria-hidden="true"></i>
          </div> */}
        </div>
      </nav>
    </>
  );
}

export default MobileHeader;
