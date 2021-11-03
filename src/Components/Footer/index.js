import whiteTextLogo from "../../images/whiteTextLogo.png";

import "./index.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        {/* <div className = "footer-logo">
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
            </div> */}

        <div className="_footerInner_">
          {[
            "About The Cornerco",
            "Privacy policy",
            "Terms of Service",
            "Contact us",
            "FAQ",
          ].map((h) => {
            return (
              <a className="_footerLink_" href="/">
                {h}
              </a>
            );
          })}
                <div className='_mblSocial_'>
              <img className='_social_'  src='assets/footer/FB.svg' />
              <img className='_social_'  src='assets/footer/Twitter.svg' />
              <img className='_social_'  src='assets/footer/LinkedIn.svg' />
              <img className='_social_'  src='assets/footer/Insta.svg' />
          </div>
        </div>
      </div>
      <div className="_rightsSection_">
        <div className='_rightsInner_'>
          <p > © 2021 The Cornerco™. All rights reserved.</p>
          <div className='_pcSocial_'>
              <img className='_social_'  src='assets/footer/FB.svg' />
              <img className='_social_'  src='assets/footer/Twitter.svg' />
              <img className='_social_'  src='assets/footer/LinkedIn.svg' />
              <img className='_social_'  src='assets/footer/Insta.svg' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
