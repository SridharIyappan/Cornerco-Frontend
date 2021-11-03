import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from "@mui/material/AccordionDetails";
import { Card } from "../../Home/SectionPart2/Section2";
import Typography from "@mui/material/Typography";

import $ from "jquery";

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
  const userId = useSelector((state) => state.cart.user.id);
  const dispatch = useDispatch();
  const [singleProduct, setSingleProduct] = useState([]);
  const [cartButton, setCartButton] = useState(false);
  const [cartValue, setCartValue] = useState(0);
  const [shownImage, setShownImage] = useState(four);
  const [similarProducts, setSimilarProducts] = useState([]);
  const url = `http://3.144.43.94:3001/api/products/${reduxParam}`;

  const fetchSingleProductAPI = async () => {
    try {
      const apiData = await axios.get(url);
      setSingleProduct(apiData.data);
      console.log(apiData.data);
    } catch (err) {
      console.log(err);
    }
  };

  const lastestProducts = async () => {
    const productsApi = await axios.get("http://3.144.43.94:3001/api/products");
    const productsData = productsApi.data;
    const releventProducts = productsData.filter(
      (data) => data.category === singleProduct.category
    );
    const filteredReleventProducts = releventProducts.filter(data => data._id !== singleProduct._id);
    setSimilarProducts(filteredReleventProducts);
    console.log(singleProduct);
    console.log(singleProduct.category);
    console.log(productsData);
    console.log(filteredReleventProducts);
    console.log(similarProducts);
  };

  useEffect(() => {
    fetchSingleProductAPI();
    lastestProducts();
  }, [fetchSingleProductAPI, lastestProducts]);

  

  const SliderCard = () => {
    return (
      <div className={"_sliderCard_"}>
        <img
          className="SliderCardImage"
          src="https://picsum.photos/240/240"
          alt=""
        />
        <div className="_priceSection_">
          <p className="Section2__CardTitle">Women Style Dumbbell</p>
          <p className="Section2__Price">$500</p>
        </div>
      </div>
    );
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
    addCart(singleProduct);
    setCartButton(true);
  };

  const addCart = async (singleProduct) => {
    setCartValue(cartValue + 1);
    dispatch(addToCart(singleProduct));

    if (userId === undefined) {
      // console.log(localStorage.getItem('product'))
      // const oldproduct = localStorage.getItem('products') ? localStorage.getItem('products') : "[]";
      //   const arrayproduct =  JSON.parse(oldproduct);
      //   let productsString = singleProduct;
      //   let products = singleProduct;

      //   arrayproduct.push(products);
      //   if(productsString){
      //       products = JSON.parse(productsString)
      //   }

      //   localStorage.setItem('products', JSON.stringify(singleProduct));
      // if(localStorage.getItem('product') === null) {
      //   localStorage.setItem("product",  JSON.stringify(singleProduct));
      //   console.log('if null')
      // } else {
      // let localData = [];
      // localData.push(singleProduct);
      // console.log(JSON.parse(localStorage.getItem("product")));
      // const data = JSON.parse(localStorage.getItem("product"));
      // console.log(data);
      // data.map((d) => {
      //   console.log(d.productName);
      // });
      // localData.push(JSON.parse(localStorage.getItem("product")));
      // // console.log(localData);
      // localStorage.setItem("product", JSON.stringify(localData));
      // }
      // localStorage.setItem("productName", singleProduct.productName);
      // localStorage.setItem("productSalePrice", singleProduct.salePrice);
      // localStorage.setItem("productId", singleProduct._id);
      // localStorage.setItem("productImage", singleProduct.avatar);
      // localStorage.setItem("productQty", 1);
      // localStorage.setItem("supplierId", singleProduct.id);
      // console.log(singleProduct);
      // console.log('loacal storage');
    } else {
      const getCartApi = await axios.get("http://3.144.43.94:3001/api/cart");
      const cartData = getCartApi.data;
      console.log(cartData);
      const userCart = cartData.filter((data) => data.userId === userId);
      const userProduct = userCart.filter(
        (data) => data.productId === singleProduct._id
      );
      console.log(singleProduct);
      console.log(userProduct[0]);
      if (userProduct.length > 0) {
        let id = userProduct[0]._id;
        let p = userProduct[0].productQty;
        let productQuantity = p + 1;
        const qty = {
          productQty: productQuantity,
        };
        try {
          axios.put(`http://3.144.43.94:3001/api/cart/` + id, qty);
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          const cart = {
            userId: userId,
            productId: singleProduct._id,
            productName: singleProduct.productName,
            productImage: singleProduct.avatar,
            productSalePrice: singleProduct.salePrice,
            productQty: 1,
            supplierId: singleProduct.id,
          };
          axios.post("http://3.144.43.94:3001/api/cart", cart);
        } catch (err) {
          console.log(err);
        }
      }
    }
  };

  const removeCart = async (id) => {
    setCartValue(cartValue - 1);
    dispatch(removeFromCart(id));

    const getCartApi = await axios.get("http://3.144.43.94:3001/api/cart");
    const cartData = getCartApi.data;
    console.log(cartData);
    const userCart = cartData.filter((data) => data.userId === userId);
    const userProduct = userCart.filter(
      (data) => data.productId === singleProduct._id
    );
    // console.log(userProduct[0]);
    if (userProduct.length > 1) {
      let pId = userProduct[0]._id;
      let p = userProduct[0].productQty;
      let productQuantity = p - 1;
      const qty = {
        productQty: productQuantity,
      };
      try {
        axios.put(`http://3.144.43.94:3001/api/cart/` + pId, qty);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        axios.delete("http://3.144.43.94:3001/api/cart" + id);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const mblSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="_ProductPgWrap_">
      <div className="_pcSingleProduct_">
        <div className="_pdWrap_">
          <div className="_pdImages_">
            <div className="_path_">
              <p className="_info_">
                Products > vitamins > Vitamin C With Zinc Supplement{" "}
              </p>
            </div>

            <div className="_singleProductInfo_">
              <div className="_sideImages_">
                <img
                  src={"http://3.144.43.94:3001/" + singleProduct.avatar}
                  value={one}
                  onClick={imageChangeOne}
                  className="side"
                  alt={singleProduct.productName}
                />
                <img
                  src={two}
                  value={two}
                  onClick={imageChangeTwo}
                  className="side"
                  alt={singleProduct.productName}
                />
                <img
                  src={three}
                  value={three}
                  onClick={imageChangeThree}
                  className="side"
                  alt={singleProduct.productName}
                />
              </div>
              <div className="_largeImages_">
                <img
                  src={shownImage}
                  className="display-image"
                  alt={singleProduct.productName}
                />
              </div>
              <div className="_content_">
                <div className="_nameAndPrice_">
                  <p className="_singleProductName_">
                    {singleProduct.productName}
                  </p>
                  <p className="_singleProductPrice_">
                    {singleProduct.salePrice}
                  </p>
                </div>
                <div>
                  <p className="_singleProductDescription_">Description</p>
                  <p className="_descriptionContent_">
                    {singleProduct.description}
                  </p>
                </div>
                <div>
                  <p className="_singleProductDescription_">Specification</p>
                  <p className="_descriptionContent_">
                    {singleProduct.specification}
                  </p>
                </div>
                <div>
                  <p className="_singleProductDescription_">Delivery</p>
                  <p className="_descriptionContent_">
                    {singleProduct.deliveryOption}
                  </p>
                </div>
                <div className="_singleProductBtn_">
                  <button
                    className="add-to-cart"
                    disabled={cartButton}
                    onClick={() => onClickCart()}
                  >
                    {cartButton ? (
                      <div>
                        <button
                          disabled={!cartButton || cartValue == 0}
                          className="minus"
                          onClick={() => removeCart(singleProduct._id)}
                        >
                          -
                        </button>
                        {/* {reduxCartQty
                          .filter((item) => item._id === singleProduct._id)
                          .map((itemQty) => (
                            <span className="text">{itemQty.qty}</span>
                          ))} */}

                        <span className="text"> {cartValue}</span>

                        <button
                          disabled={!cartButton}
                          className="plus"
                          onClick={() => addCart(singleProduct)}
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      "+ Add To Cart"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          s
        </div>
        <div className="_sliderSection_">
          <div className="_sliderInner_">
            <div className="_headWrap_">
              <div>
                <p className="_similarProducts_">Similar Products</p>
              </div>
            </div>
            <div className="_sliderWraper_">
              <div className="_SingleProductslider_">
                <Slider {...settings}>
                  {similarProducts.map((data) => (
                    <div style={{ marginLeft: "30px" }}>
                      <div className={"_sliderCard_"}>
                        <img
                          className="SliderCardImage"
                          src={`http://3.144.43.94:3001/` + data.avatar}
                          alt=""
                        />
                        <div className="_priceSection_">
                          <p className="Section2__CardTitle">
                            {data.productName}
                          </p>
                          <p className="Section2__Price">{data.salePrice}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* <div style={{ marginLeft: "30px" }}> */}
                  {/* <SliderCard />{" "} */}
                  {/* </div>
                  <div> */}
                  {/* <SliderCard />{" "} */}
                  {/* </div>
                  <div> */}
                  {/* <SliderCard />{" "} */}
                  {/* </div>
                  <div> */}
                  {/* <SliderCard />{" "} */}
                  {/* </div>
                  <div> */}
                  {/* <SliderCard />{" "} */}
                  {/* </div>
                  <div> */}
                  {/* <SliderCard />{" "} */}
                  {/* </div> */}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mblSliderSection">
        <div className="_mblSliderWraper_">
          {/* <div> */}
          <div className="_mblSingleProductslider_">
            <Slider {...mblSettings}>
              {/* <div className='slider'> */}
              <div style={{ marginLeft: "30px" }}>
                <SliderCard />{" "}
              </div>
              <div>
                <SliderCard />{" "}
              </div>
              <div>
                <SliderCard />{" "}
              </div>
              <div>
                <SliderCard />{" "}
              </div>
              <div>
                <SliderCard />{" "}
              </div>
              <div>
                <SliderCard />{" "}
              </div>
              {/* </div> */}
            </Slider>
          </div>
        </div>
        {/* </div> */}
        <div className="_nameAndPrice_">
          <p className="_singleProductName_">{singleProduct.productName}</p>
          <p className="_singleProductPrice_">{singleProduct.salePrice}</p>
        </div>{" "}
        <div className="_accordian_">
          <Accordion
            style={{
              backgroundColor: "#181818",
              color: "#fff",
              borderTop: "solid 1px #3d3d3d",
            }}
            className="_accordianTab_"
          >
            <AccordionSummary
              expandIcon={<i class="fas fa-plus" style={{ color: "#fff" }}></i>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                style={{
                  color: "#fff",
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                }}
              >
                DESCRIPTION
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ padding: "0px 0px 0px 0px" }}>
              <Typography style={{ color: "#b9b9b9", fontSize: "14px" }}>
                {singleProduct.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              backgroundColor: "#181818",
              color: "#fff",
              borderTop: "solid 1px #3d3d3d",
            }}
            className="_accordianTab_"
          >
            <AccordionSummary
              expandIcon={<i class="fas fa-plus" style={{ color: "#fff" }}></i>}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                style={{
                  color: "#fff",
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                }}
              >
                SPECIFICATION
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ color: "#b9b9b9", fontSize: "14px" }}>
                {singleProduct.specification}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              backgroundColor: "#181818",
              color: "#fff",
              borderTop: "solid 1px #3d3d3d",
            }}
            className="_accordianTab_"
          >
            <AccordionSummary
              expandIcon={<i class="fas fa-plus" style={{ color: "#fff" }}></i>}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                style={{
                  color: "#fff",
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                }}
              >
                DELIVARY
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ color: "#b9b9b9", fontSize: "14px" }}>
                {singleProduct.deliveryOption}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="_mblBtnSingleProduct_">
        <div className="_mblBtnSp_">
          <button
            className="add-to-cart"
            disabled={cartButton}
            onClick={() => onClickCart()}
          >
            {cartButton ? (
              <div>
                <button
                  disabled={!cartButton || cartValue == 0}
                  className="minus"
                  onClick={() => removeCart(singleProduct._id)}
                >
                  -
                </button>

                {/* {reduxCartQty
                  .filter((item) => item._id === singleProduct._id)
                  .map((itemQty) => (
                    <span className="text">{itemQty.qty}</span>
                  ))} */}
                <span className="text"> {cartValue}</span>

                <button
                  className="plus"
                  disabled={!cartButton}
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

    // <div className="Single-product">
    //   <div>
    //   {/* <h2 className="capsule-name">{singleProduct.productName}</h2> */}
    //   <div className="single-product-grid">
    //     <div className="small-images">
    //       <div>
    //         <img
    //           src={"http://3.144.43.94:3001/" + singleProduct.avatar}
    //           value={one}
    //           onClick={imageChangeOne}
    //           className="side-image-1"
    //           alt={singleProduct.productName}
    //         />
    //         <img
    //           src={two}
    //           value={two}
    //           onClick={imageChangeTwo}
    //           className="side-image-2"
    //           alt={singleProduct.productName}
    //         />
    //         <img
    //           src={three}
    //           value={three}
    //           onClick={imageChangeThree}
    //           className="side-image-3"
    //           alt={singleProduct.productName}
    //         />
    //       </div>
    //     </div>
    //     <div className="large-images">
    //       <img
    //         src={shownImage}
    //         className="display-image"
    //         alt={singleProduct.productName}
    //       />
    //     </div>
    //     <h3 className="single-product-cost">$ {singleProduct.mrp}</h3>
    //     <h3 className="single-product-discount-cost">
    //       $ {singleProduct.salePrice}
    //     </h3>
    //     <div className="content">
    //       <div>
    //         <h4>Description</h4>
    //         <p>{singleProduct.description}</p>
    //       </div>
    //       <div>
    //         <h4>Specification</h4>
    //         <p>{singleProduct.specification}</p>
    //       </div>
    //       <div>
    //         <h4>Delivery</h4>
    //         <p>{singleProduct.deliveryOption}</p>
    //       </div>
    //       <div>
    //         <button className="add-to-cart" onClick={() => onClickCart()}>
    //           {cartButton ? (
    //             <div>
    //               <button
    //                 className="minus"
    //                 onClick={() => removeCart(singleProduct._id)}
    //               >
    //                 -
    //               </button>

    //               {reduxCartQty
    //                 .filter((item) => item._id === singleProduct._id)
    //                 .map((itemQty) => (
    //                   <span className="text">{itemQty.qty}</span>
    //                 ))}

    //               <button
    //                 className="plus"
    //                 onClick={() => addCart(singleProduct)}
    //               >
    //                 +
    //               </button>
    //             </div>
    //           ) : (
    //             "Add To Cart"
    //           )}
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   </div>
    // </div>
  );
};

export default SingeleProduct;

// usercart.map(data => {
//   let productQuantity = data.productQty + 1;
//   const qty = {
//     productQty: productQuantity,
//   }
//   if(data.productId === singleProduct._id) {
//     axios.put(`http://3.144.43.94:3001/api/cart/` + data._id, qty)
//   } else {
//     const cart = {
//       userId: userId,
//       productId: singleProduct._id,
//       productName: singleProduct.productName,
//       productImage: singleProduct.avatar,
//       productSalePrice: singleProduct.salePrice,
//       productQty: 1,
//     };
//     axios.post('http://3.144.43.94:3001/api/cart', cart);
//   }
// });
// console.log(productInCart);
