import { useState } from 'react';
import { useSelector } from 'react-redux';

import '../index.css'

const Books = () => {

    const reduxProduct = useSelector((state) => state.cart.products);
    
    const productData = reduxProduct;
    const [cartButton, setCartButton] = useState(true);
    const [favoriteIcon, setFavoriteIcon] = useState(false);
    const [cartValue, setCartValue] = useState(0);

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
        if(cartValue !== 0) {
            setCartValue(cartValue - 1);
        }
    }

    return (
        <div className = "Products">
            <h3 className="product-list-heading">Books</h3>
            <div className = "product-grid">
                    {productData.filter(item => item.category === 'book').map(filteredItem => (
                        <div>
                            <img src = {'http://localhost:3001/'+filteredItem.avatar} className = "product-list-image" alt = { filteredItem.productName } />
                            <i className = {favoriteIcon ? "fa fa-heart i-fav-heart" : "fa fa-heart-o i-heart" }
                               onClick = { onClickFavoriteIcon }
                               >
                            </i>
                            <div className = "product-list-name" >
                                { filteredItem.productName }
                            </div>
                            <div className = "product-list-price" >
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

 
export default Books;