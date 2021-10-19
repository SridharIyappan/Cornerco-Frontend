import CommunityImage from "../../images/Community/community.png";
import BackGround from "../../images/Health-Wealth/web-bg.png";
import Google from "../../images/Health-Wealth/storeicon-google.png";
import Apple from "../../images/Health-Wealth/storeicon-apple.png";

import "./index.css";

const Community = () => {
  return (
    <div
      className="Community"
      style={{ backgroundImage: `url(${BackGround})` }}
    >
      <h3>Community</h3>
      <div className="community-section-1">
        <div className="community-content content-1">
          Health & Wealth helps you set health and financial goals; create a
          health dashboard to see at-a-glance how healthy you are; create an
          income and expense budget to see how to save more; and see your
          long-term financial future by setting unlimited spending and income
          goals with super flexible start and end dates, inflation, tax, and
          savings rates of return assumptions. Best of all, you can use the App
          to create a comprehensive colorful PDF plan you can email or print to
          help you stay on track!
        </div>
        <div className="community-image">
          <img src={CommunityImage} className="community-image" />
        </div>
      </div>
      <div className="community-section-2">
        <div className="community-content content-2">
          Health & Wealth helps you set health and financial goals; create a
          health dashboard to see at-a-glance how healthy you are; create an
          income and expense budget to see how to save more; and see your
          long-term financial future by setting unlimited spending and income
          goals with super flexible start and end dates, inflation, tax, and
          savings rates of return assumptions. Best of all, you can use the App
          to create a comprehensive colorful PDF plan you can email or print to
          help you stay on track!
        </div>
        <div className="community-content content-3">
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

export default Community;
