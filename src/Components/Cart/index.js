import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import StripeCheckout from 'react-stripe-checkout';

import "./index.css";

const Cart = () => {
  const reduxProduct = useSelector((state) => state.cart.cart);
  const cartData = reduxProduct;
  const [subTotal, setSubtotal] = useState(12);
  const [total, setTotal] = useState(12);
  const [delivery, setDelivery] = useState('Available');


  useEffect(() => {
    let item = 0;
    cartData.forEach(cartTotal => {
      let cart = cartTotal.qty * cartTotal.salePrice;
      item += cart
    })
    setTotal(item);
    setSubtotal(item);
  },[cartData])

  const makePayment = token => {
    const body = {
      token, 
      cartData
    }
    const headers = {
      "Content-Type": "application/json"
    }
    return fetch('http://localhost:3001/payment', {
      method: 'POST',
      headers,
      body: JSON.stringify(body) 
    }).then(response => {
      console.log("RESPONSE", response);
      const {status} = response;
      console.log('STATUS', status)
    }).catch(err => console.log(err))
  }

  return (
    <div className="Cart">
      <h3>Shopping Cart</h3>
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
                src={"http://localhost:3001/" + cart.avatar}
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
          <StripeCheckout 
            stripeKey = 'pk_test_51Jhou6FZKpBaoF60xmXJDjWubw8UptwpRcSy2lCMLB37j4u0lJUcE8u1jKrY6Z86wyJfH0WDZSZ1KzGnM3hJmiYA00iZBLq56Y'
            token = {makePayment}
            name = "Buy Product"
            amount = {cartData.salePrice * 100}
            shippingAddress
            billingAddress = {false}
            >
              <button>Checkout</button>
          </StripeCheckout>
        </div>
      </div>
    </div>
  );
};

export default Cart;
