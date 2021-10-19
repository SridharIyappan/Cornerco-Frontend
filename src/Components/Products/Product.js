import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getParam } from "../Redux/reduxCart/cartActions";

import BackGround from "../../images/Health-Wealth/web-bg.png";

// ICONS
import ourpicks from "../../icons/ourpicks.png";
import sale from "../../icons/sale.png";
import vitamins from "../../icons/vitamins.png";
import oils from "../../icons/oils.png";
import books from "../../icons/books.png";
import supplements from "../../icons/supplements.png";
import merchandise from "../../icons/merchandise.png";
import cosmetics from "../../icons/cosmetics.png";
import fitness from "../../icons/fitness.png";

import "./Products.css";

const products = [
  {
    image: ourpicks,
    name: "Our Picks",
    id: 1,
  },
  {
    image: sale,
    name: "Sale",
    id: 9,
  },
  {
    image: vitamins,
    name: "Vitamins",
    id: 2,
  },
  {
    image: oils,
    name: "Oils",
    id: 3,
  },
  {
    image: books,
    name: "Books",
    id: 4,
  },
  {
    image: supplements,
    name: "Supplements",
    id: 5,
  },
  {
    image: merchandise,
    name: "Merchandise",
    id: 6,
  },
  {
    image: cosmetics,
    name: "Cosmetics",
    id: 7,
  },
  {
    image: fitness,
    name: "fitness",
    id: 8,
  },
];

const Products = () => {
  const reduxProduct = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();

  const productData = reduxProduct;

  const getParams = (id) => {
    dispatch(getParam(id));
  };

  const items = products;

  return (
    <div className="products" style={{ backgroundImage: `url(${BackGround})` }}>
      <div className="row-col-2">
        <h3 className="heading-primary">products</h3>
      </div>
      <div className="row-col-9">
        {items.map((filteredItem) => (
          <div key={filteredItem.id}>
            <img
              src={filteredItem.image}
              className="product-image"
              alt={filteredItem.productName}
            />
            <div className="products-name-main">{filteredItem.name}</div>
          </div>
        ))}
      </div>
      <div className="row-col-2">
        <h3 className="heading-secondary">vitamins</h3>
        <div className="view-products">
          <NavLink exact to="product-vitamins">
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </NavLink>
        </div>
      </div>
      <div className="row-col-6">
        {productData
          .filter((item) => item.category === "vitamins")
          .map((filteredItem) => (
            <div key={filteredItem._id}>
              <Link
                to={`/product/${filteredItem._id}`}
                onClick={() => getParams(filteredItem._id)}
                className="product-link"
              >
                <img
                  src={"http://18.223.43.173:3001/uploads" + filteredItem.avatar}
                  className="item-image"
                  alt={filteredItem.productName}
                />
                <div className="products-sub">{filteredItem.productName}</div>
              </Link>
            </div>
          ))}
      </div>
      <hr />
      <div className="row-col-2">
        <h3 className="heading-secondary">Essential Oils</h3>
        <div className="view-products">
          <NavLink exact to="/product-essential-oils">
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </NavLink>
        </div>
      </div>
      <div className="row-col-6">
        {productData
          .filter((item) => item.category === "oil")
          .map((filteredItem) => (
            <div key={filteredItem._id}>
              <Link
                to={`/product/${filteredItem._id}`}
                onClick={() => getParams(filteredItem._id)}
                className="product-link"
              >
                <img
                  src={
                    "http://18.223.43.173:3001/uploads" + filteredItem.avatar
                  }
                  className="item-image"
                  alt={filteredItem.productName}
                />
                <div className="products-sub">{filteredItem.productName}</div>
              </Link>
            </div>
          ))}
      </div>
      <hr />
      <div className="row-col-2">
        <h3 className="heading-secondary">Books</h3>
        <div className="view-products">
          <NavLink exact to="/product-books">
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </NavLink>
        </div>
      </div>
      <div className="row-col-6">
        {productData
          .filter((item) => item.category === "book")
          .map((filteredItem) => (
            <div key={filteredItem._id}>
              <Link
                to={`/product/${filteredItem._id}`}
                onClick={() => getParams(filteredItem._id)}
                className="product-link"
              >
                <img
                  src={
                    "http://18.223.43.173:3001/uploads" + filteredItem.avatar
                  }
                  className="item-image"
                  alt={filteredItem.productName}
                />
                <div className="products-sub">{filteredItem.productName}</div>
              </Link>
            </div>
          ))}
      </div>
      <hr />
    </div>
  );
};

export default Products;
