import React from "react";
import "./Section3.css";

const Section3 = () => {
  return (
    <div className="Section3__Main">
      <div className="Section3__Box3">
        <div className="Section3__Box1">
          <h4>
            <strong style={{ fontSize: "28px" }}>Become a Coach</strong>
          </h4>
          <p className="coach-p">Lorem ipsum dolor sit amet, consectetur</p>
          <p className="coach-p">Lorem ipsum dolor sit amet, consectetur</p>
          <p className="coach-p">Lorem ipsum dolor sit amet, consectetur</p>
          <p className="coach-p" style={{ color: "red" }}>
            Get Started >
          </p>
        </div>
      </div>
      <div className="Section3__InnerOuter">
        <div className="Section3__Box2">
          <h4 style={{ fontSize: "20px" }}>
            <b>Strength</b>
          </h4>
          <p>Starts</p>
          <h1>
            <b>$10</b>
            <span className="Section3__pricemini">/mo</span>
          </h1>
          <ul>
            <li>Principle</li>
            <li>Calculate stress</li>
            <li>Knowledge of Strength</li>
          </ul>
          <button className="Section3__CardButton">Know more</button>
        </div>
        <div className="Section3__Box2">
          <h4 style={{ fontSize: "20px" }}>
            <b>MentalHealth + Fitness</b>
          </h4>
          <p>Starts</p>
          <h1>
            <b>$25</b>
            <span className="Section3__pricemini">/mo</span>
          </h1>
          <ul>
            <li>Principle</li>
            <li>Calculate stress</li>
            <li>Physical Education</li>
          </ul>
          <button className="Section3__CardButton">Know more</button>
        </div>
        <div className="Section3__Box2">
          <h4>
            <b style={{ fontSize: "20px" }}>Platinum</b>
          </h4>
          <p>Starts</p>
          <h1>
            <b>$30</b>
            <span className="Section3__pricemini">/mo</span>
          </h1>
          <ul>
            <li>Principle</li>
            <li>Calculate stress</li>
            <li>Physical Education</li>
          </ul>
          <button className="Section3__CardButton">Know more</button>
        </div>
      </div>
    </div>
  );
};

export default Section3;
