import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import "./HeadCss.css";
import whiteTextLogo from "../../../images/whiteTextLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faUserAlt,
  faShoppingCart,
  faSearch,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { removeUser } from "../../Redux/reduxCart/cartActions";
import FavoriteProducts from "../../Favorite";

const PcHeader = () => {
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
    <div>
      <div className="Header__OuterDiv">
        <img
          src={whiteTextLogo}
          alt="CornerCo"
          className="Header__OuterImage"
        />
        <div className="Header__Searchout">
          <div>
            <input
              type="text"
              className="Header__Search "
              placeholder="What are you looking for"
            />
          </div>
          <div className="input-search-ic">
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
              // <Link exact to="/favorite">
                <div className="Header__IconOuter">
                  <i className="fa fa-heart" aria-hidden="true"></i>
                </div>
              // </Link>
            }
            position="bottom right"
            className="popup"
          >
            <FavoriteProducts />
          </Popup>
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
            <FontAwesomeIcon icon={faComments} size="2x" />
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
  );
};

export default PcHeader;

{
  /* <div class="dropdown">
  <button class="dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div> */
}
