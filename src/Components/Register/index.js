import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";

import facebook from '../../icons/social-media-icons/fb.png';
import google from '../../icons/social-media-icons/google.png';
import whiteTextLogo from "../../images/whiteTextLogo.png";
import CornercoGif from "../../images/cornerco-gif-temp.gif";

import "./index.css";

const Regiester = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  const userNameChange = (e) => {
    setUserName(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const showPasswordClick = (e) => {
    setShowPassword(!showPassword);
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    if (userName !== "" && password !== "" && email !== "") {
      try {
        await axios({
          method: "post",
          url: "http://3.144.43.94:3001/api/users",
          data: {
            userName: userName,
            password: password,
            email: email,
          },
        })
          .then(setUserName(""), setPassword(""), setEmail(""))
          .then(history.push("/login"));
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="Register">
      <div className="left">  
        <h2>Welcome</h2>
        <form onSubmit={registerSubmit} encType="multipart/form-data">
          <label>Username</label>
          <input
            type="text"
            value={userName}
            onChange={userNameChange}
            className="register-input"
          />
          <label>E-mail</label>
          <input
            type="email"
            value={email}
            onChange={emailChange}
            className="register-input"
          />
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={passwordChange}
            className="register-input"
          />
          <i
            className={showPassword ? "fa fa-eye" : "fa fa-eye-slash"}
            onClick={showPasswordClick}
            aria-hidden="true"
          ></i>

          <button type="submit" className="register-form">
            Register
          </button>
          <h4 className="policy">
            <span>By register you agree to Cornerco,s </span>
            Terms of Condition
            <span> and </span>
            Privacy Policy
          </h4>
        </form>
        <hr />
        <h5>or</h5>
        <h3>
          <span>Already have an account ? </span>
          <NavLink exact to="/login">
            Login
          </NavLink>
        </h3>
        <h4>
          <img src = {facebook} className = "reg-fb" alt = "img-missing" />
          <img src = {google} className = "reg-google" alt = "img-missing" />
        </h4>
      </div>
      <div className="right">
        <img src={CornercoGif} alt="gif-missing" />
        <img src={whiteTextLogo} alt="logo-missing" />
      </div>
    </div>
  );
};

export default Regiester;
