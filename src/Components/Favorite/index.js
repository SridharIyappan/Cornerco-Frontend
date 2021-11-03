import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite } from "../Redux/reduxCart/cartActions";

import "./index.css";

const FavoriteProducts = () => {
  const reduxProduct = useSelector((state) => state.cart.favorite);
  const dispatch = useDispatch();
  const userId = useSelector(state => state.cart.user.id);
  const [favApiData, setFavApiData] = useState([]);
  // const favoriteData = reduxProduct;
  useEffect(() => {
    console.log(reduxProduct.length);
    getFavorite();
  })
  const removeFavorite = async(id) => {
    dispatch(addToFavorite(id));
    console.log(id);
    await axios.delete("http://3.144.43.94:3001/api/favorites/" + id);
    // const favoriteData = favoriteApi.data;
    // const userFav = favoriteData.filter((data) => data.userId === userId);
    // setFavApiData(userFav);
  };

  const getFavorite = async() => {
    const favoriteApi = await axios.get(
      "http://3.144.43.94:3001/api/favorites"
    );
    const favoriteData = favoriteApi.data;
    const userFav = favoriteData.filter((data) => data.userId === userId);
    setFavApiData(userFav);
  }

  return (
    <div className="_FavoriteProducts_">
      {reduxProduct.length === 0 && <h4>No Favorite Added</h4>}
      {reduxProduct.length > 0 && <h4>My Favorites</h4>}
      <div>
        {favApiData.map((data) => (
          <div className="_favProduct_">
            <div className="_favCart_">
              <img
                className="_favProductImage_"
                // src="https://picsum.photos/960/500"
                src={"http://3.144.43.94:3001/" + data.productImage[0]}
              />
              <div className="_favPriceSection_">
                <div className="_favproductName_">{data.productName}</div>
                <div className="_favPrice_">{data.productSalePrice}</div>
              </div>
            </div>
            <div className="_favQty_" onClick={() => removeFavorite(data._id)}>
              <img
                className="_favqtyControl_"
                src="assets/favorites/trash.png"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteProducts;
