import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import "./index.css";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const id = useSelector((state) => state.cart.forgetUserId.id);
  const history = useHistory();

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
  const rePasswordChange = (e) => {
    setRePassword(e.target.value);
  };
  const showPasswordClick = (e) => {
    setShowPassword(!showPassword);
  };

  const resetPassword = async (e) => {
    e.preventDefault();
    if (password === rePassword) {
      setConfirmPassword(password);
    } else {
      console.log("password mismatch");
    }
    const data = { password: confirmPassword };
    console.log(id);
    console.log(confirmPassword);
    try {
      await axios
        .put(`http://localhost:3001/api/users/${id}`, data)
        .then(setPassword(""), setRePassword(""))
        .then(history.push("/"));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="ResetPassword">
      <form onSubmit={resetPassword}>
        <h3>Reset Password</h3>
        <div>
          <label>Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={passwordChange}
          />
          <i
            className={showPassword ? "fa fa-eye" : "fa fa-eye-slash"}
            onClick={showPasswordClick}
            aria-hidden="true"
          ></i>
        </div>
        <div>
          <label>Retype Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            value={rePassword}
            onChange={rePasswordChange}
          />
          <i
            className={showPassword ? "fa fa-eye" : "fa fa-eye-slash"}
            onClick={showPasswordClick}
            aria-hidden="true"
          ></i>
        </div>
        <button type="submit">Reset</button>
      </form>
    </div>
  );
};

export default ResetPassword;
