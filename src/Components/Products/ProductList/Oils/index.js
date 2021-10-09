import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import {addToCart, removeFromCart} from '../../../Redux/reduxCart/cartActions';

import '../index.css'

const EssentialOils = () => {

    const reduxProduct = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();
    const productData = reduxProduct;

    const [cartButton, setCartButton] = useState();
    const [favoriteIcon, setFavoriteIcon] = useState(false);
    const [cartValue, setCartValue] = useState(0);

    

    const onClickCart = (id) => {
        productData.map(data => {
            if(data._id === id){
                setCartButton(id);
            }
            else {
                console.log(false);
            }
        });
    }

    const onClickFavoriteIcon = () => {
        setFavoriteIcon(!favoriteIcon);
    }

    const onClickAdd = (filteredItem) => {
        setCartValue(cartValue + 1);
        dispatch(addToCart(filteredItem))
    }

    const onClickMinus = (id) => {
        setCartValue(cartValue - 1);
        dispatch(removeFromCart(id));
    }


    return (
        <div className = "Products">
            <h3 className="product-list-heading">Essential Oils</h3>
            <div className = "product-grid">
                    {productData.filter(item => item.category === 'oil').map(filteredItem => (
                        <div>
                            <img src = {'http://localhost:3001/'+filteredItem.avatar} className = "product-list-image" alt = {filteredItem.productName}/>
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
                                    onClick = {()=>onClickCart(filteredItem._id)} >
                                        { filteredItem._id === cartButton?
                                            <div>
                                                <button className = "minus" onClick = {() => onClickMinus(filteredItem._id)} >-</button>
                                                <span className="text" >{cartValue}</span>
                                                <button className = "plus" onClick = {() => onClickAdd(filteredItem)}>+</button>
                                            </div> :
                                            "Add "
                                        }
                            </button>
                        </div> 
                    ))}
            </div>
        </div>
     );
}

 
export default EssentialOils;