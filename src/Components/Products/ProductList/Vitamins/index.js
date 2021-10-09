// import DUMMY_DATA from './Products_Dummy_Data.js';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {addToCart} from '../../../Redux/reduxCart/cartActions';

import '../index.css'

const Vitamins = () => {

    const reduxProduct = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();
    
    const productData = reduxProduct;

    const [favoriteIcon, setFavoriteIcon] = useState(false);


    const onClickFavoriteIcon = () => {
        setFavoriteIcon(!favoriteIcon);
    }

    const cart = (filteredItem) => {
        dispatch(addToCart(filteredItem))
    }

    return (
        <div className = "Products">
            <h3 className="product-list-heading">vitamins</h3>
            <div className = "product-grid">
                    {productData.filter(item => item.category === 'vitamins').map(filteredItem => (
                        <div key = { filteredItem._id } >
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
                                    onClick = {() => cart(filteredItem)} >            
                                Add To Cart
                            </button>
                        </div> 
                    ))}
            </div>
        </div>
     );
}
 
export default Vitamins;

