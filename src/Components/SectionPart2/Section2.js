import React from 'react'
import "./Section2.css";


const Card = () => {
    return (
        <div className="Section2__CardMain">
            <img className="Section2__CardImage" src="https://picsum.photos/140/140" alt="" />
            <h6>Women Style Dumbbell</h6>
            <p>$ 500 </p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
    )
}

const Section2 = () => {
    return (
        <div className="Section2__MainPart">
            <div className="Section2__Heading">
                <h3 className="Section__HeadingHead">Feature Products</h3>
                <p>see More Products</p>
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
                <div>

                </div>
            </div>
        </div>
    )
}

export default Section2;
