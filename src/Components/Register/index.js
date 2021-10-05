import whiteTextLogo from "../../images/whiteTextLogo.png";
import CornercoGif from "../../images/cornerco-gif-temp.gif";

import './index.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Regiester = () => {

    const[userName, setUserName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[showPassword, setShowPassword] = useState(false);

    const userNameChange = (e) => {
        setUserName(e.target.value);
    }

    const emailChange = (e) => {
        setEmail(e.target.value);
    }

    const passwordChange = (e) => {
        setPassword(e.target.value);
    }

    const showPasswordClick = (e) => {
        setShowPassword(!showPassword);
    }

    const registerSubmit = async(e) => {
        e.preventDefault();
        if(userName !== '' && password !== '' && email !== '' ) {
            try {
                await axios({
                    method: 'post',
                    url: 'http://18.223.43.173:3001/api/users',
                    data: {
                        userName: userName,
                        password: password,
                        email: email
                    }
                }).then(setUserName(''), setPassword(''), setEmail(''))
            }
            catch(err) {
                console.log(err);
            }  
        }                       
    }

    return ( 
        <div className = "Register">
            <div className = "left">
                <img src = {whiteTextLogo} />
                <h2>Welcome</h2>
                <form onSubmit = {registerSubmit} encType = 'multipart/form-data' >
                    <label>Username</label>
                        <input 
                            type = "text" 
                            value = {userName} 
                            onChange = {userNameChange}
                            className = "register-input" 
                        />
                    <label>E-mail</label>
                        <input 
                            type = "email" 
                            value = {email} 
                            onChange = {emailChange}
                            className = "register-input" 
                        />
                    <label>Password</label>
                        <input 
                            type = {showPassword? "text" : "password"} 
                            value = {password} 
                            onChange = {passwordChange}
                            className = "register-input" 
                        />
                        <i 
                            className= {showPassword? 'fa fa-eye' : 'fa fa-eye-slash'}
                            onClick = {showPasswordClick}
                            aria-hidden="true">
                        </i>

                    <button type = "submit" className = "register-form">Register</button>
                    <h4>
                        <span>By register you agree to Cornerco,s </span> 
                        Terms of Condition
                        <span> and </span> 
                        Privacy Policy
                    </h4>
                </form>
                <h3>
                    <span>Already have an account ? </span>
                    <NavLink exact to = '/login'>
                        Login
                    </NavLink>
                </h3>
            </div>
            <div className = "right">
                <img src = {CornercoGif} />
                <img src = {whiteTextLogo} />
            </div>
        </div>
     );
}
 
export default Regiester;

 