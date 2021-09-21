import { useState } from 'react';

import one from '../../../../images/Essential-Oils/1.jpeg';
import two from '../../../../images/Essential-Oils/2.jpeg';
import three from '../../../../images/Essential-Oils/3.jpeg';
import four from '../../../../images/Essential-Oils/4.jpeg';
import five from '../../../../images/Essential-Oils/5.jpeg';
import six from '../../../../images/Essential-Oils/6.png';

import '../index.css';

const items = [
    {
        image: one,
        name: '1'    
    },
    {
        image: two,
        name: '2'    
    },
    {
        image: three,
        name: '3'    
    },
    {
        image: four,
        name: '4'    
    },
    {
        image: five,
        name: '5'    
    },
    {
        image: six,
        name: '6'    
    }
];



const EssentialOils = () => {
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
            <h3 className="product-list-heading">Essential Oils</h3>
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
 
export default EssentialOils;