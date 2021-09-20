const Checkout = () => {
    return ( 
        <div className = "Checkout">
            <h2>Checkout</h2>
            <h3>Total</h3>
            <form>

                <div className ="row100">
                    <div className = "col" >
                        <div className = "input-box">
                            <input type = "text" name = "" required = "required" />
                                <span className = "text">Full Name</span>
                                <span className = "line"></span>
                            
                        </div>
                    </div>
                </div>

                <div className ="row100">
                    <div className = "col" >
                        <div className = "input-box">
                            <input type = "text" name = "" required = "required" />
                                <span className = "text">Address</span>
                                <span className = "line"></span>
                            
                        </div>
                    </div>
                </div>

                <div className ="row100">
                    <div className = "col" >
                        <div className = "input-box">
                            <input type = "text" name = "" required = "required" />
                                <span className = "text">Email</span>
                                <span className = "line"></span>
                            
                        </div>
                    </div>
                </div>

                <div className ="row100">
                    <div className = "col" >
                        <div className = "input-box">
                            <input type = "text" name = "" required = "required" />
                                <span className = "text">Pincode</span>
                                <span className = "line"></span>
                            
                        </div>
                    </div>
                </div>

                <div className ="row100">
                    <div className = "col" >
                        <div className = "input-box">
                            <input type = "text" name = "" required = "required" />
                                <span className = "text">Country</span>
                                <span className = "line"></span>
                            
                        </div>
                    </div>
                </div>

                <div className ="row100">
                    <div className = "col" >
                        <div className = "input-box">
                            <input type = "text" name = "" required = "required" />
                                <span className = "text">Debit/Credit Card Number</span>
                                <span className = "line"></span>
                            
                        </div>
                    </div>
                </div>

                <div className ="row100">

                    <div className = "col" >
                        <div className = "input-box">
                            <input type = "text" name = "" required = "required" />
                                <span className = "text">Card Expire</span>
                                <span className = "line"></span>
                            
                        </div>

                        <div className = "col" >
                            <div className = "input-box">
                                <input type = "text" name = "" required = "required" />
                                    <span className = "text">CVV</span>
                                    <span className = "line"></span>
                                
                            </div>
                        </div>
                    </div>

                </div>

                <div className ="row100">
                    <div className = "col" >
                        <div className = "input-box">
                            <input type = "text" name = "" required = "required" />
                                <span className = "text">Name On Card</span>
                                <span className = "line"></span>
                            
                        </div>
                    </div>
                </div>

            </form>
        </div>
     );
}
 
export default Checkout;