import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import { addToFavorite, getParam } from '../../../Redux/reduxCart/cartActions';
import '../index.css'

const EssentialOils = () => {

    const reduxProduct = useSelector((state) => state.cart.products);
    const reduxFavorite = useSelector((state) => state.cart.favorite);
    const dispatch = useDispatch();
    const productData = reduxProduct;
    const favoriteData = reduxFavorite;

    const getParams = (id) => {
        dispatch(getParam(id));
    };

    const onClickFavoriteIcon = (filteredItem) => {
        dispatch(addToFavorite(filteredItem))
    }

    return (
        <div className = "Products">
            <h3 className="product-list-heading">Essential Oils</h3>
            <div className = "product-grid">
                    {productData.filter(item => item.category === 'oil').map(filteredItem => (
                        <div key = {filteredItem._id}>
                            <img src = {'http://localhost:3001/'+filteredItem.avatar} className = "product-list-image" alt = {filteredItem.productName}/>
                            <i className = {favoriteData.find(favorite => favorite._id === filteredItem._id) ? "fa fa-heart i-fav-heart" : "fa fa-heart i-heart" }
                               onClick = { () => onClickFavoriteIcon(filteredItem) }
                            />
                            <div className = "product-list-name" >
                                { filteredItem.productName }
                            </div>
                            <div className = "product-list-price" >
                                $ { filteredItem.mrp }
                            </div>
                            <Link
                                to={`/product/${filteredItem._id}`}
                                onClick={() => getParams(filteredItem._id)}
                            >
                                <button className = "add-to-cart" >
                                    View Product
                                </button>
                            </Link>
                        </div> 
                    ))}
            </div>
        </div>
     );
}

 
export default EssentialOils;