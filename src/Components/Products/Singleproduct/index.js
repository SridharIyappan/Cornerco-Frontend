import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";

import one from "../../../images/Vitamins/1.jpeg";
import two from "../../../images/Vitamins/2.jpeg";
import three from "../../../images/Vitamins/3.jpeg";
import four from "../../../images/Vitamins/4.jpeg";

import "./index.css";
import { addToCart, removeFromCart } from "../../Redux/reduxCart/cartActions";

const SingeleProduct = () => {
  const reduxParam = useSelector((state) => state.cart.param);
  const reduxCartQty = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [singleProduct, setSingleProduct] = useState([]);
  const [cartButton, setCartButton] = useState(false);
  const [cartValue, setCartValue] = useState(0);
  const [shownImage, setShownImage] = useState(four);
  const url = `http://18.223.43.173:3001/api/products/${reduxParam}`;

  useEffect(() => {
    fetchSingleProductAPI();   
  }, [reduxCartQty]);

  const fetchSingleProductAPI = async () => {
    try {
      const apiData = await axios.get(url);
      setSingleProduct(apiData.data);
    } catch (err) {
      console.log(err);
    }
  };

  const imageChangeOne = () => {
    setShownImage(one);
  };

  const imageChangeTwo = () => {
    setShownImage(two);
  };

  const imageChangeThree = () => {
    setShownImage(three);
  };

  const onClickCart = () => {
    setCartButton(true);
  };

  const addCart = (singleProduct) => {
    setCartValue(cartValue + 1);
    dispatch(addToCart(singleProduct));
  };

  const removeCart = (id) => {
    setCartValue(cartValue - 1);
    dispatch(removeFromCart(id));
  };

  return (
    <div className="Single-product">
      <h2 className="capsule-name">{singleProduct.productName}</h2>
      <div className="single-product-grid">
        <div className="small-images">
          <div>
            <img
              src={"http://18.223.43.173:3001/" + singleProduct.avatar}
              value={one}
              onClick={imageChangeOne}
              className="side-image-1"
              alt={singleProduct.productName}
            />
            <img
              src={two}
              value={two}
              onClick={imageChangeTwo}
              className="side-image-2"
              alt={singleProduct.productName}
            />
            <img
              src={three}
              value={three}
              onClick={imageChangeThree}
              className="side-image-3"
              alt={singleProduct.productName}
            />
          </div>
        </div>
        <div className="large-images">
          <img
            src={shownImage}
            className="display-image"
            alt={singleProduct.productName}
          />
        </div>
        <h3 className="single-product-cost">$ {singleProduct.mrp}</h3>
        <h3 className="single-product-discount-cost">
          $ {singleProduct.salePrice}
        </h3>
        <div className="content">
          <div>
            <h4>Description</h4>
            <p>{singleProduct.description}</p>
          </div>
          <div>
            <h4>Specification</h4>
            <p>{singleProduct.specification}</p>
          </div>
          <div>
            <h4>Delivery</h4>
            <p>{singleProduct.deliveryOption}</p>
          </div>
          <div>
            <button className="add-to-cart" onClick={() => onClickCart()}>
              {cartButton ? (
                <div>
                  <button
                    className="minus"
                    onClick={() => removeCart(singleProduct._id)}
                  >
                    -
                  </button>

                  {reduxCartQty
                    .filter((item) => item._id === singleProduct._id)
                    .map((itemQty) => (
                      <span className="text">{itemQty.qty}</span>
                    ))}

                  <button
                    className="plus"
                    onClick={() => addCart(singleProduct)}
                  >
                    +
                  </button>
                </div>
              ) : (
                "Add To Cart"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingeleProduct;
