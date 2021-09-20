import React from 'react'
import whiteTextLogo from "../../images/whiteTextLogo.png";
import "./Footer.css";



const Footer = () => {
    return (
        <div>
            <div className="Footer__Main">
           <div className="Footer__Inner">
           <div className="Footer__Company">
               <img src={whiteTextLogo} alt="cornerco" className="Footer__Image"/>
           </div>
           <div className="Footer__About">
              <ul>
              <h5>About</h5>
              <li>About Corner</li>
               <li>Privacy policy</li>
               <li>Terms of Service</li>
               <li>Contact us</li>
               <li>FAQs</li>
              </ul>
           </div>
           </div>
        </div>
        <div className="Footer__Copywrite">
            <p>© 2021 Cornerco™. All rights reserved.</p>
            <div className="Footer__Icons">
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-linkedin"></i>
            <i class="fab fa-instagram-square"></i>
            </div>
        </div>
        </div>
    )
}

export default Footer
