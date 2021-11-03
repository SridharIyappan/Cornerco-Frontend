import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite } from "../Redux/reduxCart/cartActions";

function MobileFavorites() {
  const reduxProduct = useSelector((state) => state.cart.favorite);
  const dispatch = useDispatch();
  // const favoriteData = reduxProduct;

  const removeFavorite = (id) => {
    dispatch(addToFavorite(id));
  };

  return (
    // <div>
    <div className="_mblWrap_">
      <div className="_mblInner_">
        {reduxProduct.map((item) => {
          return (
            // <div className="_cartBottomSection_">
            <>
              <div className="_mblProduct_">
                <div className="_mblCart_">
                  <img
                    className="_mblProductImage_"
                    src={"http://3.144.43.94:3001/" + item.avatar}
                  />
                  <div className="_mblPriceSection_">
                    <div className="_mblproductName_">{item.productName}</div>
                    <div className="_mblPrice_">{item.salePrice}</div>
                  </div>
                </div>
                <div className="_mblfavQty_" onClick={() => removeFavorite(item)}>
                  <img
                    className="_favqtyControl_"
                    src="assets/favorites/trash.png"
                  />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default MobileFavorites;
