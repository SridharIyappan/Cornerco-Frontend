import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import BackGround from "../../images/Health-Wealth/web-bg.png";

import StripeCheckout from "react-stripe-checkout";

import "./index.css";
import axios from "axios";

const Cart = () => {
  const reduxProduct = useSelector((state) => state.cart.cart);
  const cartData = reduxProduct;
  const [subTotal, setSubtotal] = useState(12);
  const [total, setTotal] = useState(12);
  const [productDetails, setProductDetails] = useState([]);
  const [delivery, setDelivery] = useState("Available");
  const [show, setShow] = useState(false);
  const name = useSelector((state) => state.cart.user.name);
  const id = useSelector((state) => state.cart.cart.id);

  useEffect(() => {
    let item = 0;
    cartData.forEach((cartTotal) => {
      let cart = cartTotal.qty * cartTotal.salePrice;
      item += cart;
    });
    if (item <= 0) {
      setShow(false);
    } else {
      setShow(true);
    }
    const totalPrice = item.toFixed(2);
    setTotal(totalPrice);
    setSubtotal(totalPrice);
  }, [cartData]);

  // const makePayment = (token) => {
  //   const body = {
  //     token,
  //     cartData,
  //   };
  //   const headers = {
  //     "Content-Type": "application/json",
  //   };
  //   return fetch("http://3.144.43.94:3001/payment", {
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

  const makePayment = (token, charge) => {

    let product = [];
    var today = new Date();
    var date = today.getMonth() + 1 + "-" + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes();
    var dateTime = date + " " + time;
    const number = Math.floor(10000 + Math.random() * 90000);
    const add = token.card.address_line1+',' + ' ' +
                  token.card.address_city+',' +  ' ' +
                  token.card.address_country+',' + ' ' +
                  token.card.address_zip;

    cartData.forEach((cartTotal) => {
      let cart = cartTotal.qty * cartTotal.salePrice;
      product.push({
        pId: cartTotal._id,
        pQty: cartTotal.qty,
        pTotal: cart,
        purchasedOn: dateTime,
        customerName: name,
        orderId: number,
        sId: cartTotal.id,
        productName: cartTotal.productName,
        deliveryOption: cartTotal.ddeliveryOption,
        address: add
      });
    });

    console.log(token);
    console.log(charge);
    const num = Math.floor(10000 + Math.random() * 90000);
    const body = {
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
      body: JSON.stringify(body),
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

  return (
    <div className="Cart" style={{ backgroundImage: `url(${BackGround})` }}>
      <h3>Shopping Cart</h3>
      {!show && <p>Cart Is Empty</p>}
      {show && (
        <div className="cart-grid">
          <div className="cart-product-details">
            <div>
              <p>Product</p>
              <p>Name</p>
              <p>price</p>
              <p>Quantity</p>
            </div>
            {cartData.map((cart) => (
              <div className="cart-products">
                <img
                  src={"http://3.144.43.94:3001/" + cart.avatar}
                  className="cart-product-image"
                  alt={cart.avatar}
                />
                <div className="cart-product-image">{cart.productName}</div>
                <div>${cart.salePrice}</div>
                <div>{cart.qty}</div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h4>Cart Total</h4>
            <div className="cart-total-grid">
              <h5>Subtotal</h5>
              <h5 className="end">${subTotal}</h5>
              <h5>Delivery</h5>
              <h5 className="end">{delivery}</h5>
              <h5>Total</h5>
              <h5 className="end">${total}</h5>
            </div>
            {/* <NavLink exact to = '/checkout'>
            <button>Checkout</button>
          </NavLink> */}
            {/* <StripeCheckout
            stripeKey="pk_test_51Jhou6FZKpBaoF60xmXJDjWubw8UptwpRcSy2lCMLB37j4u0lJUcE8u1jKrY6Z86wyJfH0WDZSZ1KzGnM3hJmiYA00iZBLq56Y"
            token={makePayment}
            name="Buy Product"
            amount={cartData.salePrice * 100}
            shippingAddress
            billingAddress={false}
          >
            <button>Checkout</button>
          </StripeCheckout>
        </div> */}
            <StripeCheckout
              stripeKey="pk_test_51Jhou6FZKpBaoF60xmXJDjWubw8UptwpRcSy2lCMLB37j4u0lJUcE8u1jKrY6Z86wyJfH0WDZSZ1KzGnM3hJmiYA00iZBLq56Y"
              token={makePayment}
              shippingAddress={true}
              billingAddress={true}
              amount={total * 100}
              name="product buy"
            >
              <button>Checkout</button>
            </StripeCheckout>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

//  useEffect(() => {
//     let item = 0;
//     let product = [];
//     var today = new Date();
//     var date = today.getMonth() + 1 + "-" + today.getDate();
//     var time = today.getHours() + ":" + today.getMinutes();
//     var dateTime = date + " " + time;
//     const num = Math.floor(10000 + Math.random() * 90000);
//     console.log(dateTime);
//     cartData.forEach((cartTotal) => {
//       let cart = cartTotal.qty * cartTotal.salePrice;
//       item += cart;
//       product.push({
//         pId: cartTotal._id,
//         pQty: cartTotal.qty,
//         pTotal: cart,
//         purchasedOn: dateTime,
//         customerName: name,
//         orderId: num,
//         sId: cartTotal.id,
//         productName: cartTotal.productName,
//         deliveryOption: cartTotal.ddeliveryOption,
//       });
//     });
//     if (item <= 0) {
//       setShow(false);
//     } else {
//       setShow(true);
//     }
//     const totalPrice = item.toFixed(2);
//     setTotal(totalPrice);
//     setSubtotal(totalPrice);
//     setProductDetails(product);
//   }, [cartData]);

//   // const makePayment = (token) => {
//   //   const body = {
//   //     token,
//   //     cartData,
//   //   };
//   //   const headers = {
//   //     "Content-Type": "application/json",
//   //   };
//   //   return fetch("http://3.144.43.94:3001/payment", {
//   //     method: "POST",
//   //     headers,
//   //     body: JSON.stringify(body),
//   //   })
//   //     .then((response) => {
//   //       console.log("RESPONSE", response);
//   //       const { status } = response;
//   //       console.log("STATUS", status);
//   //     })
//   //     .catch((err) => console.log(err));
//   // };

//   const makePayment = (token, charge) => {
//     console.log(token);
//     console.log(charge);
//     const num = Math.floor(10000 + Math.random() * 90000);
//     const body = {
//       token,
//       cartData,
//       total,
//       invoiceAmount: total,
//       name: name,
//       orderNo: num,
//       productDetails: productDetails,
//     };
//     const headers = {
//       "Content-Type": "application/json",
//     };
//     return fetch("http://3.144.43.94:3001/api/transaction", {
//       method: "POST",
//       headers,
//       body: JSON.stringify(body),
//     })
//       .then(async () => {
//         // const dat = await axios.post(
//         //   "http://3.144.43.94:3001/api/transaction",
//         //   body
//         // );
//         // console.log(dat);
//         // console.log("RESPONSE", response);
//         // const { status } = response;
//         // console.log("STATUS", status);
//       })
//       .catch((err) => console.log(err));
