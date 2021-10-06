// import DUMMY_DATA from './Products_Dummy_Data.js';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import '../index.css'

const Vitamins = () => {

    const [productData, setProductData] = useState([]);
    const [cartButton, setCartButton] = useState(true);
    const [favoriteIcon, setFavoriteIcon] = useState(false);
    const [cartValue, setCartValue] = useState(0);

    const url = 'http://18.223.43.173:3001/api/products';

    useEffect(async() => {
        try {
            const products = await axios.get(url);
            setProductData(products.data);
        }catch(err) {
            console.log(err);
        } 
    },[url]);

    const onClickCart = () => {
        setCartButton(false);
    }

    const onClickFavoriteIcon = () => {
        setFavoriteIcon(!favoriteIcon);
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
                    {productData.filter(item => item.category === 'vitamins').map(filteredItem => (
                        <div>
                            <img src = {'http://localhost:3001/'+filteredItem.avatar} className = "product-list-image" />
                            <i className = {favoriteIcon ? "fa fa-heart i-fav-heart" : "fa fa-heart-o i-heart" }
                               onClick = { onClickFavoriteIcon }
                               >
                            </i>
                            <div class = "product-list-name" >
                                { filteredItem.productName }
                            </div>
                            <div class = "product-list-price" >
                                $ { filteredItem.mrp }
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
                    ))}
            </div>
        </div>
     );
}

const mapStateToProps = state => {
    return {
        porducts: state.cart.porducts
    };
};
 
export default connect(mapStateToProps)(Vitamins);