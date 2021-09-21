import one from '../../images/Essential-Oils/1.jpeg';
import './index.css';

const Cart = () => {
    return ( 
        <div className = "Cart">
            <h3>Shopping Cart</h3>
            <div className = "cart-grid">
                <div className = "cart-product-details">
                        <p>Product</p>
                        <p>Name</p>
                        <p>price</p>
                        <p>Quantity</p>
                        <img src = {one} className = "cart-product-image" />
                        <div className = "cart-product-image">one</div>
                        <div>$ 29</div>
                        <div>1</div>
                </div>
                <div className = "cart-total">
                    <h4>Cart Total</h4>
                    <div className = "cart-total-grid">
                        <h5>Subtotal</h5>
                        <h5 className = "end" >$29</h5>
                        <h5>Delivery</h5>
                        <h5 className = "end" >Free</h5>
                        <h5>Total</h5>
                        <h5 className = "end" >$29</h5>
                    </div>
                    <button>Checkout</button>
                </div>
            </div>
        </div>
     );
}
 
export default Cart;