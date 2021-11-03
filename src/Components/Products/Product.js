import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getParam } from "../Redux/reduxCart/cartActions";
import { useState, useEffect } from "react";
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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  console.log(window.innerWidth);
  const productData = reduxProduct;

  const getParams = (id) => {
    dispatch(getParam(id));
  };
  useEffect(()=>{
    setScreenWidth(window.innerWidth);

  },[screenWidth])
  const items = products;

  return (
    <div className="_productCover_">
      <div className="_totalProducts_">
        <p className="_productHeading_">Products</p>
        <div className="_productsWrap_">
          {items.map((item) => {
            return (
              <div key={item.id} className="_item_">
                <img
                  src={item.image}
                  className="_productImage_"
                  alt={item.productName}
                />
                <div className="_name_">{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="_products_">
        <div className="_headingWrap_">
          <h3 className="_heading_">Vitamins</h3>
          <NavLink exact to="product-vitamins">
            <a href="/">See All Products</a>
          </NavLink>
        </div>
        <div className="_wrapCards_">
          {productData
            .filter((f) => f.category === "vitamins")
            .slice(0, 4)
            .map((filteredItem) => {
              return (
                <div key={filteredItem.id}>
                  <Link
                    to={`/product/${filteredItem._id}`}
                    onClick={() => getParams(filteredItem._id)}
                    className="product-link"
                  >
                    <div className="_itemCard_">
                      <img
                        className="__productImage__"
                        src={"http://3.144.43.94:3001/" + filteredItem.avatar}
                        alt={filteredItem.productName}
                      />
                      <div className="_priceSection_">
                        <p className="__CardTitle__">
                          {filteredItem.productName}{" "}
                        </p>
                        <p className="Section2__Price">
                          {filteredItem.salePrice}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
      <div className="_products_">
        <div className="_headingWrap_">
          <h3 className="_heading_">Essential Oils</h3>
          <NavLink exact to="/product-essential-oils">
            <a href="/">See All Products</a>
          </NavLink>
        </div>
        <div className="_wrapCards_">
          {productData
            .filter((f) => f.category === "oil")
            .slice(0, 4)
            .map((filteredItem) => {
              return (
                <div key={filteredItem.id}>
                  <Link
                    to={`/product/${filteredItem._id}`}
                    onClick={() => getParams(filteredItem._id)}
                    className="product-link"
                  >
                    <div className="_itemCard_">
                      <img
                        className="__productImage__"
                        src={"http://3.144.43.94:3001/" + filteredItem.avatar}
                        alt={filteredItem.productName}
                      />
                      <div className="_priceSection_">
                        <p className="__CardTitle__">
                          {filteredItem.productName}{" "}
                        </p>
                        <p className="Section2__Price">
                          {filteredItem.salePrice}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
      <div className="_products_">
        <div className="_headingWrap_">
          <h3 className="_heading_">Books</h3>
          <NavLink exact to="/product-books">
            <a href="/">See All Products</a>
          </NavLink>
        </div>
        <div className="_bookwrapCards_">
          {screenWidth > 1500
            ? productData
                .filter((f) => f.category === "book")
                .slice(0, 4)
                .map((filteredItem) => {
                  return (
                    <div key={filteredItem.id}>
                      <Link
                        to={`/product/${filteredItem._id}`}
                        onClick={() => getParams(filteredItem._id)}
                        className="product-link"
                      >
                        <img
                          className="__bookImage__"
                          src={"http://3.144.43.94:3001/" + filteredItem.avatar}
                          alt={filteredItem.productName}
                        />
                      </Link>
                    </div>
                  );
                })
            : productData
                .filter((f) => f.category === "book")
                .slice(0, 4)
                .map((filteredItem) => {
                  return (
                    <div key={filteredItem.id}>
                      <Link
                        to={`/product/${filteredItem._id}`}
                        onClick={() => getParams(filteredItem._id)}
                        className="product-link"
                      >
                        {/* <div className="_itemCard_"> */}
                        <img
                          className="__bookImage__"
                          src={"http://3.144.43.94:3001/" + filteredItem.avatar}
                          alt={filteredItem.productName}
                        />
                        {/* <div className="_priceSection_">
                        <p className="__CardTitle__">
                          {filteredItem.productName}{" "}
                        </p>
                        <p className="Section2__Price">$500</p>
                      </div> */}
                        {/* </div> */}
                      </Link>
                    </div>
                  );
                })}
        </div>
      </div>
    </div>
    ////////////////////////////////////////////
    // <div className="products">
    //   <div className="row-col-2">
    //     <h3 className="heading-primary">products</h3>
    //   </div>
    //   <div className="row-col-9">
    //     {items.map((filteredItem) => (
    //       <div key={filteredItem.id}>
    //         <img
    //           src={filteredItem.image}
    //           className="product-image"
    //           alt={filteredItem.productName}
    //         />
    //         <div className="products-name-main">{filteredItem.name}</div>
    //       </div>
    //     ))}
    //   </div>
    //   <div className="row-col-2">
    //     <h3 className="heading-secondary">vitamins</h3>
    //     <div className="view-products">
    //       <NavLink exact to="product-vitamins">
    //         <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
    //       </NavLink>
    //     </div>
    //   </div>
    //   <div className="row-col-6">
    //     {productData
    //       .filter((item) => item.category === "vitamins")
    //       .map((filteredItem) => (
    //         <div key={filteredItem._id}>
    //           <Link
    //             to={`/product/${filteredItem._id}`}
    //             onClick={() => getParams(filteredItem._id)}
    //             className="product-link"
    //           >
    //             <img
    //               src={"http://3.144.43.94:3001/" + filteredItem.avatar}
    //               className="item-image"
    //               alt={filteredItem.productName}
    //             />
    //             <div className="products-sub">{filteredItem.productName}</div>
    //           </Link>
    //         </div>
    //       ))}
    //   </div>
    //   <hr />
    //   <div className="row-col-2">
    //     <h3 className="heading-secondary">Essential Oils</h3>
    //     <div className="view-products">
    //       <NavLink exact to="/product-essential-oils">
    //         <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
    //       </NavLink>
    //     </div>
    //   </div>
    //   <div className="row-col-6">
    //     {productData
    //       .filter((item) => item.category === "oil")
    //       .map((filteredItem) => (
    //         <div key={filteredItem._id}>
    //           <Link
    //             to={`/product/${filteredItem._id}`}
    //             onClick={() => getParams(filteredItem._id)}
    //             className="product-link"
    //           >
    //             <img
    //               src={"http://3.144.43.94:3001/" + filteredItem.avatar}
    //               className="item-image"
    //               alt={filteredItem.productName}
    //             />
    //             <div className="products-sub">{filteredItem.productName}</div>
    //           </Link>
    //         </div>
    //       ))}
    //   </div>
    //   <hr />
    //   <div className="row-col-2">
    //     <h3 className="heading-secondary">Books</h3>
    //     <div className="view-products">
    //       <NavLink exact to="/product-books">
    //         <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
    //       </NavLink>
    //     </div>
    //   </div>
    //   <div className="row-col-6">
    //     {productData
    //       .filter((item) => item.category === "book")
    //       .map((filteredItem) => (
    //         <div key={filteredItem._id}>
    //           <Link
    //             to={`/product/${filteredItem._id}`}
    //             onClick={() => getParams(filteredItem._id)}
    //             className="product-link"
    //           >
    //             <img
    //               src={"http://3.144.43.94:3001/" + filteredItem.avatar}
    //               className="item-image"
    //               alt={filteredItem.productName}
    //             />
    //             <div className="products-sub">{filteredItem.productName}</div>
    //           </Link>
    //         </div>
    //       ))}
    //   </div>
    //   <hr />
    // </div>
  );
};

export default Products;
