import React from 'react'
import "./Section2.css";


const Card = () => {
    return (
        <div className="Section2__CardMain">
            <img className="Section2__CardImage" src="https://picsum.photos/140/140" alt="" />
            <p><b>Women Style Dumbbell</b></p>
            <p>$ 500 </p>
            <p>Lorem Ipsum ...</p>
        </div>
    )
}

const Section2 = () => {
    return (
        <div className="Section2__MainPart">
            <div className="Section2__Heading">
                <h3>Feature Products</h3>
                <p style={{"color":"red","cursor":"pointer"}}>See More Products ></p>
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
    )
}

export default Section2;
