import whiteTextLogo from "../../images/whiteTextLogo.png";

import './index.css'

const Footer = () => {
    return ( 
        <div className = "footer">
            <div className = "footer-logo">
                <img src={whiteTextLogo} alt="cornerco" className = "footer-img" />
            </div>
            <div className = "footer-about">
                <ul>
                <h5><b>About</b></h5>
                <li>About Corner</li>
                <li>Privacy policy</li>
                <li>Terms of Service</li>
                <li>Contact us</li>
                <li>FAQs</li>
                </ul>
            </div>
            <div className = "footer-copyright">
                <p>© 2021 Cornerco™. All rights reserved.</p>
            </div>
            <div className = "footer-icon">
                <i className="fab fa-facebook i-fb" aria-hidden="true"></i>
                <i className="fab fa-twitter i-tw"></i>
                <i className="fab fa-linkedin i-lin" aria-hidden="true"></i>
                <i className="fab fa-instagram i-in"></i>
            </div>
        </div>
     );
}
 
export default Footer;