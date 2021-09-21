// import DUMMY_DATA from './Products_Dummy_Data.js';
import { useState } from 'react';
import one from '../../../../images/Vitamins/1.jpeg';
import two from '../../../../images/Vitamins/2.jpeg';
import three from '../../../../images/Vitamins/3.jpeg';
import four from '../../../../images/Vitamins/4.jpeg';
import five from '../../../../images/Vitamins/5.jpeg';
import six from '../../../../images/Vitamins/6.jpeg';

import '../index.css'

const items = [
    {
        image: one,
        name: '1' ,
        price: 29.9   
    },
    {
        image: two,
        name: '2',
        price: 29.9    
    },
    {
        image: three,
        name: '3' ,
        price: 29.9   
    },
    {
        image: four,
        name: '4' ,
        price: 29.9   
    },
    {
        image: five,
        name: '5',
        price: 29.9    
    },
    {
        image: six,
        name: '6' ,
        price: 29.9   
    }
];


const Vitamins = () => {

    const [cartButton, setCartButton] = useState(true);
    const [cartValue, setCartValue] = useState(0);

// const text = 

const onClickCart = () => {
    setCartButton(false);
}

const onClickAdd = () => {
    setCartValue(cartValue + 1);
}

const onClickMinus = () => {
    setCartValue(cartValue - 1);
}

    return (
        <div className = "Products">
            <h3 className="product-list-heading">vitamins</h3>
            <div className = "product-grid">
                    {items.map(item =>
                        <div>
                            <img src = {item.image} className = "product-list-image" />
                            <div class = "product-list-name" >
                                { item.name }
                            </div>
                            <div class = "product-list-price" >
                                $ { item.price }
                            </div>
                            <button className = "add-to-cart" 
                                    onClick = {onClickCart} >
                                        { cartButton ? "Add To Cart" : 
                                            <div>
                                                <button className = "minus" onClick = {onClickMinus}>-</button>
                                                <span className="text">{cartValue}</span>
                                                <button className = "plus" onClick = {onClickAdd}>+</button>
                                            </div>
                                        }
                            </button>
                        </div> 
                    )}
            </div>
        </div>
     );
}
 
export default Vitamins;