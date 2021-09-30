import { useState } from 'react';

import one from '../../../images/Vitamins/1.jpeg';
import two from '../../../images/Vitamins/2.jpeg';
import three from '../../../images/Vitamins/3.jpeg';
import four from '../../../images/Vitamins/4.jpeg';

import './index.css';

const SingeleProduct = () => {

    const[shownImage, setShownImage] = useState(four);
    const[cost, setCost] = useState(19.9);

    const imageChangeOne = () => {
        setShownImage(one);
        
    }

    const imageChangeTwo = () => {
        setShownImage(two);
        
    }

    const imageChangeThree = () => {
        setShownImage(three);
        
    }


    return ( 
        <div className = "Single-product">
            <h2 className = "capsule-name" >Capsule Name</h2>
            <div className = "single-product-grid">
                <div className = "small-images" >
                    <div>
                        <img src = {one} value = {one} onClick = {imageChangeOne} className = "side-image-1" />
                        <img src = {two} value = {two} onClick = {imageChangeTwo} className = "side-image-2" />
                        <img src = {three} value = {three} onClick = {imageChangeThree} className = "side-image-3" />
                    </div>
                </div>
                <div className = "large-images" >
                    <img src = {shownImage} className = "display-image" />
                </div>
                <h3 className = "single-product-cost" >$ {cost}</h3>
                <h3 className = "single-product-discount-cost" >$ 13.99</h3>
                <div className = "content">
                    <div>
                        <h4>Description</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a 
                            galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div>
                        <h4>Specification</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div>
                        <h4>Delivery</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                    </div>
                    <div>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SingeleProduct;