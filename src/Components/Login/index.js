import whiteTextLogo from "../../images/whiteTextLogo.png";
import CornercoGif from "../../images/cornerco-gif-temp.gif";

import './index.css'
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";

const Login = () => {

    const[loginEmail, setLoginEmail] = useState('');
    const[loginPassword, setLoginPassword] = useState('');
    const[showPassword, setShowPassword] = useState(false);

    const[emailFailed, setEmailFailed] = useState(false);
    const[passwordFailed, setPasswordFailed] = useState(false);
    const[loginFailed, setLoginFailed] = useState(false);

    const history = useHistory();

    const loginEmailChange = (e) => {
        setLoginEmail(e.target.value);
    }

    const loginPasswordChange = (e) => {
        setLoginPassword(e.target.value);
    }

    const showPasswordClick = (e) => {
        setShowPassword(!showPassword);
    }

    const loginSubmit = async (e) => {
        e.preventDefault();
        try {
            const login = await axios.get('http://localhost:3001/api/users');
            const loginData = login.data;
            loginData.map((log) =>{
                if(log.email === loginEmail && log.password === loginPassword) {
                    history.push('/');
                }
                else if(log.email === loginEmail) {
                    setPasswordFailed(true);
                }
                else if(log.password === loginPassword) {
                    setEmailFailed(true);
                }
                else {
                    setLoginEmail('');
                    setLoginPassword('');
                    setLoginFailed(true);
                }
            })

        }
        catch(err) {
            console.log(err);
        }
    }


    return ( 
        <div className = "Login">
            <div className = "left">
                <img src = {whiteTextLogo} />
                <h2>Welcome Back!</h2>
                <p>Login to your account now</p>
                {passwordFailed && <p className = "red">Password Incorrect</p>}
                {emailFailed && <p className = "red">Email doesn't exist</p>}
                {loginFailed && <p className = "red">Email & Password doesn't exist</p>}
                <form onSubmit = { loginSubmit } >
                    <label>E-mail</label>
                    <input type = "email" 
                        value = {loginEmail} 
                        onChange = {loginEmailChange}
                        className = "login-input" />
                    <label>Password</label>
                    <input type = {showPassword? "text" : "password"} 
                        value = {loginPassword} 
                        onChange = {loginPasswordChange}
                        className = "login-input" />
                        <i 
                            className= {showPassword? 'fa fa-eye' : 'fa fa-eye-slash'}
                            onClick = {showPasswordClick}
                            aria-hidden="true">
                        </i>
                    <div>
                        <input type = "checkbox" />
                        <span className = "remember">Remember Me</span>
                        <span className = "forget-password">Forget Password ?</span>
                    </div>
                    <button type = "submit" className = "login-form">LOGIN</button>
                </form>
                <h3><span>Don't have an account?</span> 
                    <NavLink exact to = '/register'>
                        Register 
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
 
export default Login;