import DUMMY_DATA from './Products_Dummy_Data.js';

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


//VITAMINS IMAGES
import vitaminsone from '../../images/Vitamins/1.jpeg';
import vitaminstwo from '../../images/Vitamins/2.jpeg';
import vitaminsthree from '../../images/Vitamins/3.jpeg';
import vitaminsfour from '../../images/Vitamins/4.jpeg';
import vitaminsfive from '../../images/Vitamins/5.jpeg';
import vitaminssix from '../../images/Vitamins/6.jpeg';

//Oils Images
import oilsone from '../../images/Essential-Oils/1.jpeg';
import oilstwo from '../../images/Essential-Oils/2.jpeg';
import oilsthree from '../../images/Essential-Oils/3.jpeg';
import oilsfour from '../../images/Essential-Oils/4.jpeg';
import oilsfive from '../../images/Essential-Oils/5.jpeg';
import oilssix from '../../images/Essential-Oils/6.png';

//Books Images
import booksone from '../../images/Books/1.jpeg';
import bookstwo from '../../images/Books/2.jpeg';
import booksthree from '../../images/Books/3.jpeg';
import booksfour from '../../images/Books/4.jpeg';
import booksfive from '../../images/Books/5.png';
import bookssix from '../../images/Books/6.jpeg';

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

const vitaminsProduct = [
    {
        image: vitaminsone,
        name: '1'    
    },
    {
        image: vitaminstwo,
        name: '2'    
    },
    {
        image: vitaminsthree,
        name: '3'    
    },
    {
        image: vitaminsfour,
        name: '4'    
    },
    {
        image: vitaminsfive,
        name: '5'    
    },
    {
        image: vitaminssix,
        name: '6'    
    }
];

const oilsProduct = [
    {
        image: oilsone,
        name: '1'    
    },
    {
        image: oilstwo,
        name: '2'    
    },
    {
        image: oilsthree,
        name: '3'    
    },
    {
        image: oilsfour,
        name: '4'    
    },
    {
        image: oilsfive,
        name: '5'    
    },
    {
        image: oilssix,
        name: '6'    
    }
];

const booksProduct = [
    {
        image: booksone,
        name: '1'    
    },
    {
        image: bookstwo,
        name: '2'    
    },
    {
        image: booksthree,
        name: '3'    
    },
    {
        image: booksfour,
        name: '4'    
    },
    {
        image: booksfive,
        name: '5'    
    },
    {
        image: bookssix,
        name: '6'    
    }
];



const Products = () => {

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
                {vitaminsProduct.map(item =>
                    <div>
                        <img src = {item.image} className = "item-image" />
                        <div class = "products-sub" >
                            { item.name }
                        </div>
                    </div> 
                )}
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
                {oilsProduct.map(item =>
                    <div>
                        <img src = {item.image} className = "item-image" />
                        <div class = "products-sub" >
                            { item.name }
                        </div>
                    </div> 
                )}
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
                {booksProduct.map(item =>
                    <div>
                        <img src = {item.image} className = "item-image" />
                        <div class = "products-sub" >
                            { item.name }
                        </div>
                    </div> 
                )}
            </div>
            <hr />
        </div>
     );
}


export default Products;