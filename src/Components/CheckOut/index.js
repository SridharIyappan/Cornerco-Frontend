import "./index.css";

const Checkout = () => {
  return (
    <div className="Checkout">
      <form>
        <h2>Checkout</h2>
        <h3>Total</h3>
        <div className="row100">
          <div className="col">
            <div className="input-box">
              <input type="tex" name="" required="required" />
              <span className="tex">Full Name</span>
              <span className="line"></span>
            </div>
          </div>
        </div>

        <div className="row100">
          <div className="col">
            <div className="input-box">
              <input type="tex" name="" required="required" />
              <span className="tex">Address</span>
              <span className="line"></span>
            </div>
          </div>
        </div>

        <div className="row100">
          <div className="col">
            <div className="input-box">
              <input type="tex" name="" required="required" />
              <span className="tex">Email</span>
              <span className="line"></span>
            </div>
          </div>
        </div>

        <div className="row100">
          <div className="col">
            <div className="input-box">
              <input type="tex" name="" required="required" />
              <span className="tex">Pincode</span>
              <span className="line"></span>
            </div>
          </div>
        </div>

        <div className="row100">
          <div className="col">
            <div className="input-box">
              <input type="tex" name="" required="required" />
              <span className="tex">Country</span>
              <span className="line"></span>
            </div>
          </div>
        </div>

        <h4 className="payment-text">Payment Methods</h4>

        <div className="row100">
          <div className="col">
            <div className="input-box">
              <input type="tex" name="" required="required" />
              <span className="tex">Debit/Credit Card Number</span>
              <span className="line"></span>
            </div>
          </div>
        </div>

        <div className="row100">
          <div className="col">
            <div className="input-box">
              <input type="tex" name="" required="required" />
              <span className="tex">Card Expire</span>
              <span className="line"></span>
            </div>
          </div>

          <div className="col">
            <div className="input-box">
              <input type="tex" name="" required="required" />
              <span className="tex">CVV</span>
              <span className="line"></span>
            </div>
          </div>
        </div>

        <div className="row100">
          <div className="col">
            <div className="input-box">
              <input type="tex" name="" required="required" />
              <span className="tex">Name On Card</span>
              <span className="line"></span>
            </div>
          </div>
        </div>
        <button>proceed to pay</button>
      </form>
    </div>
  );
};

export default Checkout;
