import React from 'react';

import BackGround from "../../../images/Health-Wealth/web-bg.png";

import "./Section2.css";


const Card = () => {
    return (
        <div className="Section2__CardMain">
            <img className="Section2__CardImage" src="https://picsum.photos/240/240" alt="" />
            <b className="Section2__CardTitle">Women Style Dumbbell</b>
            <h5><b>$500</b></h5>
            <p>Lorem Ipsum is simply printing and ...</p>
        </div>
    )
} 

const Section2 = () => {
    return (
      <div
        className="Section2__MainPart"
        style={{ backgroundImage: `url(${BackGround})` }}
      >
        <div className="Section2__Heading">
          <h3>
            <b>Feature Products</b>
          </h3>
          <p style={{ color: "red", cursor: "pointer" }}>See More Products ></p>
        </div>
        <div className="Section2__Main">
          <div className="Section2__Cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="Section2__ADpart">
            <div className="Section2__ADpartInner">
              <h3>SHEFFIELD BUSINESS SCHOOL</h3>
              <p>Our graduates often get called name -like Sir.</p>
              <p> -Advertisement- </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Section2;
