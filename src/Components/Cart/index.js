import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import BackGround from "../../images/Health-Wealth/web-bg.png";

import StripeCheckout from "react-stripe-checkout";

import "./index.css";
import axios from "axios";

const Cart = () => {
  const reduxProduct = useSelector((state) => state.cart.cart);
  const userId = useSelector((state) => state.cart.user.id);
  const name = useSelector((state) => state.cart.user.name);
  const cartData = reduxProduct;
  const [subTotal, setSubtotal] = useState(12);
  const [total, setTotal] = useState(12);
  const [cartValue, setCartValue] = useState(0);
  const [delivery, setDelivery] = useState("Available");
  const [show, setShow] = useState(false);

  const [dbCart, setDbCart] = useState([]);

  useEffect(() => {
    let item = 0;
    cartData.forEach((cartTotal) => {
      let cart = cartTotal.qty * cartTotal.salePrice;
      item += cart;
    });
    const totalPrice = item.toFixed(2);
    setTotal(totalPrice);
    setSubtotal(totalPrice);
    getCart();
  }, [cartData]);

  const getCart = async () => {
    const cartApi = await axios.get("http://3.144.43.94:3001/api/cart");
    const cartData = cartApi.data;
    cartData.map((data) => {
      console.log(data.userId);
      // console.log(userId);
    });
    // console.log(cartData.userId);
    const userCart = cartData.filter((data) => data.userId === userId);
    console.log(userCart);
    let item = 0;
    userCart.forEach((cartTotal) => {
      let cart = cartTotal.productQty * cartTotal.productSalePrice;
      item += cart;
    });
    setSubtotal(item.toFixed(2));
    setTotal(item.toFixed(2));
    if (userCart.length === 0) {
      setShow(false);
    } else {
      setShow(true);
    }
    console.log(userCart, "success");
    setDbCart(userCart);
  };
  //git
  const makePayment = (token, charge) => {
    let product = [];
    var today = new Date();
    var date = today.getMonth() + 1 + "-" + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes();
    var dateTime = date + " " + time;
    const number = Math.floor(10000 + Math.random() * 90000);
    const add =
      token.card.address_line1 +
      "," +
      " " +
      token.card.address_city +
      "," +
      " " +
      token.card.address_country +
      "," +
      " " +
      token.card.address_zip;
    console.log(dbCart);
    dbCart.forEach((cartDetails) => {
      let cart = cartDetails.productQty * cartDetails.productSalePrice;
      product.push({
        pId: cartDetails.productId,
        pQty: cartDetails.productQty,
        pTotal: cart,
        purchasedOn: dateTime,
        customerName: name,
        orderId: number,
        // sId: cartTotal.id,
        productName: cartDetails.productName,
        // deliveryOption: cartTotal.ddeliveryOption,
        address: add,
      });
    });
    console.log(product);
    console.log(token);
    console.log(charge);
    const num = Math.floor(10000 + Math.random() * 90000);
    const data = {
      token,
      cartData,
      total,
      invoiceAmount: total,
      name: name,
      orderNo: num,
      productDetails: product,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    return fetch("http://3.144.43.94:3001/api/transaction", {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    })
      .then(async () => {
        // const dat = await axios.post(
        //   "http://3.144.43.94:3001/api/transaction",
        //   body
        // );
        // console.log(dat);
        // console.log("RESPONSE", response);
        // const { status } = response;
        // console.log("STATUS", status);
      })
      .catch((err) => console.log(err));
  };
  //03-11-21
  // const makePayment = (token) => {
  //   const body = {
  //     token,
  //     cartData,
  //     userId,
  //   };
  //   const headers = {
  //     "Content-Type": "application/json",
  //   };
  //   return fetch("http://3.144.43.94:3001/api/transaction", {
  //     method: "POST",
  //     headers,
  //     body: JSON.stringify(body),
  //   })
  //     .then((response) => {
  //       console.log("RESPONSE", response);
  //       const { status } = response;
  //       console.log("STATUS", status);
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <>
      <div className="_Cart_">
        <div className="_cartInnerWrapper_">
          <div className="_cartSection_">
            <p className="_cartHeading_">My Cart</p>
            <div className="_cartBody_">
              {show ? (
                <div>
                  <div className="_topSection_">
                    <div className="_cartLeftSection_">
                      <p>PODUCT DETAILS</p>
                    </div>
                    <div className="_cartRightSection_">
                      <div className="_cell_">PRICE</div>
                      <div className="_cell_">QUANTITY</div>
                      <div className="_cell_">TOTAL</div>
                    </div>
                  </div>
                  {dbCart.map((item) => {
                    return (
                      <div className="_cartBottomSection_">
                        <div className="_productNameSection_">
                          <img
                            className="_productImage_"
                            src={
                              "http://3.144.43.94:3001/" + item.productImage[0]
                            }
                          />
                          <div className="_productName_">
                            {item.productName}
                          </div>
                        </div>
                        <div className="_productDetails_">
                          <div className="_cell_">{item.productSalePrice}</div>
                          <div className="_cell_">{item.productQty}</div>
                          <div className="_cell_">
                            {item.productSalePrice.toFixed(0) * item.productQty}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="empty-cart">Cart is Empty</p>
              )}
            </div>
          </div>
          {show && (
            <div className="_paymentSection_">
              <p className="_cartHeading_">Payment Summary </p>
              <div className="_paymentBody_">
                <div className="_payWrap_">
                  <div className="_linesWrap_">
                    <div className="_line_">
                      <div>Subtotal</div>
                      <div>${subTotal}</div>
                    </div>
                    {/* <div className="_line_">
                      <div>Delivery</div>
                      <div>{delivery}</div>
                    </div> */}
                  </div>

                  <div className="_line_">
                    <div>Total</div>
                    <div>${total}</div>
                  </div>
                </div>
                <StripeCheckout
                  stripeKey="pk_test_51Jhou6FZKpBaoF60xmXJDjWubw8UptwpRcSy2lCMLB37j4u0lJUcE8u1jKrY6Z86wyJfH0WDZSZ1KzGnM3hJmiYA00iZBLq56Y"
                  token={makePayment}
                  name="Buy Product"
                  amount={cartData.salePrice * 100}
                  shippingAddress
                  billingAddress={false}
                >
                  <button className="_payButton_">Checkout</button>
                </StripeCheckout>
              </div>
            </div>
          )}
        </div>
      </div>

      {cartData.length != 0 ? (
        <div className="_mblWrap_">
          <div className="_mblInner_">
            {cartData.map((item) => {
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
                        <div className="_mblproductName_">
                          {item.productName}
                        </div>
                        <div className="_mblPrice_">{item.salePrice}</div>
                      </div>
                    </div>
                    <div className="_mblQty_">
                      {/* <img
                        className="_qtyControl_"
                        src="assets/cart/minus.svg"
                      /> */}
                      <div className="_mblQtyNumber_">{item.qty}</div>
                      {/* <img
                        className="_qtyControl_"
                        src="assets/cart/plus.svg"
                      /> */}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div>
            <div className="_paymentSection_">
              <p className="_cartHeading_">Payment Summary </p>
              <div className="_paymentBody_">
                <div className="_payWrap_">
                  <div className="_linesWrap_">
                    <div className="_line_">
                      <div>Subtotal</div>
                      <div>{subTotal}</div>
                    </div>
                    <div className="_line_">
                      <div>Delivery</div>
                      <div>{delivery}</div>
                    </div>
                  </div>

                  <div className="_line_">
                    <div>Total</div>
                    <div>${total}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <StripeCheckout
            stripeKey="pk_test_51Jhou6FZKpBaoF60xmXJDjWubw8UptwpRcSy2lCMLB37j4u0lJUcE8u1jKrY6Z86wyJfH0WDZSZ1KzGnM3hJmiYA00iZBLq56Y"
            token={makePayment}
            name="Buy Product"
            amount={cartData.salePrice * 100}
            shippingAddress
            billingAddress={false}
          >
            <button className="_payButton_">Checkout</button>
          </StripeCheckout>
        </div>
      ) : (
        <div className="_mblWrap_">
          <h2 className="_noitems_">No items in Cart</h2>
        </div>
      )}
    </>
    //     <div className="Cart" >
    //       <h3>Shopping Cart</h3>
    //       {!show && <p>Cart Is Empty</p>}
    //       {show && <div className="cart-grid">
    //         <div className="cart-product-details">
    //           <div>
    //             <p>Product</p>
    //             <p>Name</p>
    //             <p>price</p>
    //             <p>Quantity</p>
    //           </div>
    //           {cartData.map((cart) => (
    //             <div className="cart-products">
    //               <img
    //                 src={"http://3.144.43.94:3001/" + cart.avatar}
    //                 className="cart-product-image"
    //                 alt={cart.avatar}
    //               />
    //               <div className="cart-product-image">{cart.productName}</div>
    //               <div>${cart.salePrice}</div>
    //               <div>{cart.qty}</div>
    //             </div>
    //           ))}
    //         </div>
    //         <div className="cart-total">
    //           <h4>Cart Total</h4>
    //           <div className="cart-total-grid">
    //             <h5>Subtotal</h5>
    //             <h5 className="end">${subTotal}</h5>
    //             <h5>Delivery</h5>
    //             <h5 className="end">{delivery}</h5>
    //             <h5>Total</h5>
    //             <h5 className="end">${total}</h5>
    //           </div>
    //           {/* <NavLink exact to = '/checkout'>
    //             <button>Checkout</button>
    //           </NavLink> */}
    //           <StripeCheckout
    //             stripeKey="pk_test_51Jhou6FZKpBaoF60xmXJDjWubw8UptwpRcSy2lCMLB37j4u0lJUcE8u1jKrY6Z86wyJfH0WDZSZ1KzGnM3hJmiYA00iZBLq56Y"
    //             token={makePayment}
    //             name="Buy Product"
    //             amount={cartData.salePrice * 100}
    //             shippingAddress
    //             billingAddress={false}
    //           >
    //             <button>Checkout</button>
    //           </StripeCheckout>
    //         </div>
    //       </div>
    // }
    //     </div>
  );
};

export default Cart;
