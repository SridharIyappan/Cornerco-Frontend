import { useDispatch, useSelector } from "react-redux";
import { addToFavorite } from "../Redux/reduxCart/cartActions";

import './index.css'

const FavoriteProducts = () => {

    const reduxProduct = useSelector((state) => state.cart.favorite);
    const dispatch = useDispatch();
    // const favoriteData = reduxProduct;

    const removeFavorite = (id) => {
        dispatch(addToFavorite(id));
    }

    return (
      <div className="Favorite-Products">
        {/* <h4>Favorites</h4> */}
        <div>
          {reduxProduct.map((data) => (
            <div className="favorite-map">
              <img
                src={"http://localhost:3001/" + data.avatar}
                className="cart-product-image"
                alt={data.avatar}
              />
              <div>
                <h3>{data.productName}</h3>
                <h3>{data.salePrice}</h3>
                <button onClick = {()=>removeFavorite(data)}>Remove From Favorite</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}
 
export default FavoriteProducts;