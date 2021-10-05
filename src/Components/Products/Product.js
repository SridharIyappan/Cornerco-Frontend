import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

// ICONS
import ourpicks from '../../icons/ourpicks.png';
import sale from '../../icons/sale.png';
import vitamins from '../../icons/vitamins.png';
import oils from '../../icons/oils.png';
import books from '../../icons/books.png';
import supplements from '../../icons/supplements.png';
import merchandise from '../../icons/merchandise.png';
import cosmetics from '../../icons/cosmetics.png';
import fitness from '../../icons/fitness.png';

import './Products.css';

const products = [
    {
        image: ourpicks,
        name: 'Our Picks'
    },
    {
        image: sale,
        name: 'Sale'
    },
    {
        image: vitamins,
        name: 'Vitamins'
    },
    {
        image: oils,
        name: 'Oils'
    },
    {
        image: books,
        name: 'Books'
    },
    {
        image: supplements,
        name: 'Supplements'
    },
    {
        image: merchandise,
        name: 'Merchandise'
    },
    {
        image: cosmetics,
        name: 'Cosmetics'
    },
    {
        image: fitness,
        name: 'fitness'
    }
];

const Products = () => {

    const[productData, setProductData] = useState([]);

    const url = 'http://18.223.43.173:3001/api/products';

    useEffect(async() => {
        try {
            const products = await axios.get(url);
            setProductData(products.data);
        }catch(err) {
            console.log(err);
        } 
    },[url]);

    const items = products;

    return ( 
        <div className = "products">
            <div className = "row-col-2">
                <h3 className = "heading-primary">products</h3>
                {/* <div className = "view-products">See all</div> */}
            </div>
            <div className = "row-col-9">
                {items.map(filteredItem =>
                    <div>
                        <img src = {filteredItem.image} className = "product-image" />
                        <div class = "products-name-main" >
                            { filteredItem.name }
                        </div>
                    </div>  
                )}
            </div>
            <div className = "row-col-2">
                <h3 className="heading-secondary">vitamins</h3>
                <div className = "view-products">
                    <NavLink exact to = "product-vitamins">
                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </NavLink>                 
                </div>
            </div>
            <div className="row-col-6">
                {productData.filter(item => item.category === 'vitamins').map(filteredItem => (
                    <div>
                        <img src = {'http://localhost:3001/'+filteredItem.avatar} className = "item-image" />
                        <div class = "products-sub" >
                            { filteredItem.productName }
                        </div>
                    </div> 
                ))
                }
            </div>
            <hr />
            <div className = "row-col-2">
                <h3 className="heading-secondary">Essential Oils</h3>
                <div className = "view-products">
                    <NavLink exact to = "/product-essential-oils">
                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </NavLink>                 
                </div>
            </div>
            <div className="row-col-6">
                {productData.filter(item => item.category === 'oil').map(filteredItem => (
                    <div>
                        <img src = {'http://localhost:3001/'+filteredItem.avatar} className = "item-image" />
                        <div class = "products-sub" >
                            { filteredItem.productName }
                        </div>
                    </div> 
                ))
                }
            </div>
            <hr />
            <div className = "row-col-2">
                <h3 className="heading-secondary">Books</h3>
                <div className = "view-products">
                    <NavLink exact to = "/product-books">
                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </NavLink>                 
                </div>
            </div>
            <div className="row-col-6">
                {productData.filter(item => item.category === 'book').map(filteredItem => (
                    <div>
                        <img src = {'http://localhost:3001/'+filteredItem.avatar} className = "item-image" />
                        <div class = "products-sub" >
                            { filteredItem.productName }
                        </div>
                    </div> 
                ))
                }
            </div>
            <hr />
        </div>
     );
}


export default Products;