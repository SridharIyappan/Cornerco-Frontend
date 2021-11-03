import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

import { addToFavorite, getParam } from "../../../Redux/reduxCart/cartActions";
import "../index.css";

const Books = () => {
  const reduxProduct = useSelector((state) => state.cart.products);
  const reduxFavorite = useSelector((state) => state.cart.favorite);
  const userId = useSelector((state) => state.cart.user.id);
  const dispatch = useDispatch();
  const productData = reduxProduct;
  const favoriteData = reduxFavorite;
  const [favData, setFavData] = useState([]);

  useEffect(() => {
    getFavoriteIcon();
  })

  const getParams = (id) => {
    dispatch(getParam(id));
  };

  const getFavoriteIcon = async() => {
    const getFav = await axios.get("http://3.144.43.94:3001/api/favorites");
    const favoriteData = getFav.data;
    setFavData(favoriteData);
  }

  const onClickFavoriteIcon = async(filteredItem) => {
    dispatch(addToFavorite(filteredItem));

    const favoriteApi = await axios.get(
      "http://3.144.43.94:3001/api/favorites"
    );
    const favoriteData = favoriteApi.data
    const userFav = favoriteData.filter(data => data.userId === userId);
    const favoriteFav = userFav.filter(data => data.productId === filteredItem._id);
    if(favoriteFav.length <= 0) {
      const data = {
        userId: userId,
        productId: filteredItem._id,
        productName: filteredItem.productName,
        productImage: filteredItem.avatar,
        productSalePrice: filteredItem.salePrice,
      }
      try {
         axios.post("http://3.144.43.94:3001/api/favorites", data);
      } catch (err) {
        console.log(err);
      }
    } else {
      let favId = favoriteFav[0]._id;
        try {
          axios.delete(`http://3.144.43.94:3001/api/favorites/${favId}`);
        } catch (err) {
          console.log(err);
        }
    }
  };

  return (
    <div className="_productListWrapper_">
      <div className="_products_">
        <div className="_headingWrap_">
          <h3 className="_heading_">Books</h3>
          {/* <NavLink exact to="product-vitamins">
            <a href='/'>See All Products</a>
            </NavLink> */}
          <p>Sort By:</p>
        </div>
        <div className="_listWrapCards_">
          {productData
            .filter((f) => f.category === "book")
            .map((filteredItem) => {
              return (
                <div key={filteredItem.id} className="_prod_">
                  <div>
                    <img
                      className="_heartIcon_"
                      onClick={() => onClickFavoriteIcon(filteredItem)}
                      src={
                        favData.find(
                          (favorite) => favorite.productId === filteredItem._id
                        )
                          ? "assets/productList/fullHeart.svg"
                          : "assets/productList/emptyHeart.svg"
                      }
                    />
                  </div>
                  <Link
                    to={`/product/${filteredItem._id}`}
                    onClick={() => getParams(filteredItem._id)}
                    className="product-link"
                  >
                    <div className="_productItemCard_">
                      <img
                        className="__productImage__"
                        src={"http://3.144.43.94:3001/" + filteredItem.avatar}
                        alt={filteredItem.productName}
                      />

                      <div className="_priceSection_">
                        <p className="__CardTitle__">
                          {filteredItem.productName}{" "}
                        </p>
                        <p className="Section2__Price">{filteredItem.salePrice}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
    // <div className="Products">
    //   <h3 className="product-list-heading">Books</h3>
    //   <div className="product-grid">
    //     {productData
    //       .filter((item) => item.category === "book")
    //       .map((filteredItem) => (
    //         <div key={filteredItem._id}>
    //           <img
    //             src={"http://3.144.43.94:3001/" + filteredItem.avatar}
    //             className="product-list-image"
    //             alt={filteredItem.productName}
    //           />
    //           <i
    //             className={
    //               favoriteData.find(
    //                 (favorite) => favorite._id === filteredItem._id
    //               )
    //                 ? "fa fa-heart i-fav-heart"
    //                 : "fa fa-heart i-heart"
    //             }
    //             onClick={() => onClickFavoriteIcon(filteredItem)}
    //           />
    //           <div className="product-list-name">
    //             {filteredItem.productName}
    //           </div>
    //           <div className="product-list-price">$ {filteredItem.mrp}</div>
    //           <Link
    //             to={`/product/${filteredItem._id}`}
    //             onClick={() => getParams(filteredItem._id)}
    //           >
    //             <button className="add-to-cart">View Product</button>
    //           </Link>
    //         </div>
    //       ))}
    //   </div>
    // </div>
  );
};

export default Books;
