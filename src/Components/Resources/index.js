import ResourcesImage from "../../images/Resources/resources.png";
import BackGround from "../../images/Health-Wealth/web-bg.png";
import Google from "../../images/Health-Wealth/storeicon-google.png";
import Apple from "../../images/Health-Wealth/storeicon-apple.png";

import "./index.css";

const Resources = () => {
  return (
    <div
      className="Resources"
    >
      <h3>Resources</h3>
      <div className="resources-section-1">
        <div className="resources-content content-1">
          Health & Wealth helps you set health and financial goals; create a
          health dashboard to see at-a-glance how healthy you are; create an
          income and expense budget to see how to save more; and see your
          long-term financial future by setting unlimited spending and income
          goals with super flexible start and end dates, inflation, tax, and
          savings rates of return assumptions. Best of all, you can use the App
          to create a comprehensive colorful PDF plan you can email or print to
          help you stay on track!
        </div>
        <div className="resources-image">
          <img src={ResourcesImage} className="Resources-image" />
        </div>
      </div>
      <div className="resources-section-2">
        <div className="resources-content content-2">
          Health & Wealth helps you set health and financial goals; create a
          health dashboard to see at-a-glance how healthy you are; create an
          income and expense budget to see how to save more; and see your
          long-term financial future by setting unlimited spending and income
          goals with super flexible start and end dates, inflation, tax, and
          savings rates of return assumptions. Best of all, you can use the App
          to create a comprehensive colorful PDF plan you can email or print to
          help you stay on track!
        </div>
        <div className="resources-content content-3">
          Health & Wealth helps you set health and financial goals; create a
          health dashboard to see at-a-glance how healthy you are; create an
          income and expense budget to see how to save more; and see your
          long-term financial future by setting unlimited spending and income
          goals with super flexible start and end dates, inflation, tax, and
          savings rates of return assumptions. Best of all, you can use the App
          to create a comprehensive colorful PDF plan you can email or print to
          help you stay on track!
        </div>
      </div>
      <div className="stores">
        <img
          src={Apple}
          alt="apple-store-icon-missing"
          className="apple-store"
        />
        <img
          src={Google}
          alt="google-store-icon-missing"
          className="google-store"
        />
      </div>
    </div>
  );
};

export default Resources;
