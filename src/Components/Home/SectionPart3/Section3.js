import React from "react";
import "./Section3.css";

const Section3 = () => {
  return (
    <div className="Section3__Main">
      <div className="_sectionInner_">
        <div className="Section3__Box3">
          <div className="Section3__Box1">
            <div>
              <strong
                style={{
                  fontSize: "36px",
                  color: "white",
                  fontFamily: "sans-serif",
                }}
              >
                Become a{" "}
                <span style={{ fontSize: "36px", color: "#ed2424" }}>
                  Coach
                </span>
              </strong>
            </div>
            <p className="coach-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              veniam,
            </p>
            <p className="coach-p-started" style={{ color: "red" }}>
              Get Started {'>'}
            </p>
          </div>
        </div>
        <div className="Section3__InnerOuter">
          {[
            {
              title: "LEVEL - I",
              price: "$40",
              benefits: [
                "Principle",
                "Calculate stress",
                "Knowledge of Strength",
              ],
            },
            {
              title: "LEVEL - II",
              price: "$100",
              benefits: ["Principle", "Calculate stress", "Physical Education"],
            },
            {
              title: "LEVEL - III",
              price: "$200",
              benefits: ["Principle", "Calculate stress", "Physical Education"],
            },
          ].map((g,index)=>{
            return(
              <div className="Section3__Box2" style={{backgroundColor:index%2!=0?'#ed2424':'#3d3d3d'}}>
              <p className="_cardTitle_" style={{color:index%2==0?'#b9b9b9':'#ffffff'}} >{g.title}</p>
              <div>
                <b className="__price__">{g.price}</b>
                <span className="Section3__pricemini">/ month</span>
              </div>
              <ul>
                {g.benefits.map((f)=>{
                  return(
                    <li>{f}</li>
                  )
                })}
             
              </ul>
              <div className="_btn_">
                <button style={{backgroundColor:index%2==0?'#ed2424':'#ffffff',color:index%2!=0?'#ed2424':'#ffffff'}} className="Section3__CardButton">Know More</button>
              </div>
            </div>
       
            )
          })
          
          }
         </div>
        {/* <div className="Section3__Box2">
          <h4 style={{ fontSize: "20px" }}>
            <b>MentalHealth + Fitness</b>
          </h4>
          <p>Starts</p>
          <h1>
            <b>$25</b>
            <span className="Section3__pricemini">/ month</span>
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
            <span className="Section3__pricemini">/ month</span>
          </h1>
          <ul>
            <li>Principle</li>
            <li>Calculate stress</li>
            <li>Physical Education</li>
          </ul>
          <button className="Section3__CardButton">Know more</button>
        </div> */}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Section3;
