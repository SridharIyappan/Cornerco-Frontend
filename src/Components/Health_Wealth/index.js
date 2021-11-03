import Man from '../../images/Health-Wealth/health-welth-manpic.png';
import Icon from '../../images/Health-Wealth/health-wealth-icon.png';
import BackGround from '../../images/Health-Wealth/web-bg.png';
import StoreIconGoogle from "../../images/Health-Wealth/storeicon-google.png";
import StoreIconApple from "../../images/Health-Wealth/storeicon-apple.png";

import "./index.css";

const HealthAndWealth = () => {
  return (
    <div
      className="HealthWealth"
    >
      <h3>Health & Wealth</h3>
      <div className="health-wealth">
        <div className="health-wealth-content">
          <p>
            Health & Wealth helps you set health and finacial goals; craete
            health health dashboard to see at-a-glance how health you are;
            create an income and expense budget to see hoe save more; and see
            your long term financial future by setting unlimited spending and
            income goals with super flexible start and end dates, inflation, tax
            and savings rates of return assumptions. Best of all, you can use
            the App to create a comprehensive colorful PDF plan you can email or
            print to help you stay on track!
          </p>
        </div>
        <div className="health-wealth-images">
          <img src={Man} alt="image-missing" className="man" />
          <img src={Icon} alt="image-missing" className="icon" />
        </div>
      </div>
      <div className="stores">
        <div className="apple-store">
          <img
            src={StoreIconApple}
            alt="apple-icon-missing"
            className="apple-icon"
          />
        </div>
        <div className="google-store">
          <img
            src={StoreIconGoogle}
            alt="google-icon-missing"
            className="google-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default HealthAndWealth;
