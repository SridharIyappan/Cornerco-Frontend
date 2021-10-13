import React from "react";
import "./Section4.css";
import adverst from "../../../images/adverst.jpg";
import blogsbanner from "../../../images/blogsbanner.jpeg";

const Sidecard = () => {
  return (
    <div className="Section4__sideCard">
      <img
        className="Section4__CardImage"
        src="https://picsum.photos/180/180"
        alt=""
      />
      <div className="Section4__CardInnerPart">
        <p>Top 10 Universities to Study Big Data Analytics in the UK</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiameu urna
          a elit pharetra molestie.
        </p>
        <p style={{ color: "red", width: "160px" }}>View More Informations ></p>
      </div>
    </div>
  );
};

const Section4 = () => {
  return (
    <div>
      <div style={{ backgroundImage: "url(" + blogsbanner + ")" }}>
        <div className="Section4__InnerTop">
          <h2>Top Resources</h2>
        </div>
        <div className="Section4__Main">
          <div className="Section4__Inner">
            <Sidecard />
            <Sidecard />
            <Sidecard />
            <Sidecard />
          </div>
          <div className="Section4__Ad">
            <img className="Section4__Image" src={adverst} alt="ad" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
