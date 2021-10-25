import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "./index.css";
import { useSelector } from "react-redux";

const EnterOtp = () => {
  const [otp, setOtp] = useState("");
  const history = useHistory();
  const forgetId  = useSelector(state => state.cart.forget.id)
  const otpChange = (e) => {
    setOtp(e.target.value);
  };
  const otpSubmit = async(e) => {
    e.preventDefault();
    try {
      const otpGet = await axios.get(
        `http://localhost:3001/api/otp/${forgetId}`
      );
      const otpData = otpGet.data;
      console.log(otpData);
        if (otpData.otp === otp) {
          history.push("/reset-password");
        } else {
          setOtp("");
        }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="EnterOtp">
      <form onSubmit={otpSubmit}>
        <input
          type="number"
          placeholder="Enter OTP"
          value={otp}
          onChange={otpChange}
        />
        <button>Verify</button>
      </form>
    </div>
  );
};

export default EnterOtp;
