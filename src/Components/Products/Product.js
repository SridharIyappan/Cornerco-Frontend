import DUMMY_DATA from './Products_Dummy_Data.js'

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


import Dummy from '../../images/dummy.jpg';
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
    // {
    //     image: supplements,
    //     name: 'Supplements'
    // },
    // {
    //     image: merchandise,
    //     name: 'Merchandise'
    // },
    // {
    //     image: cosmetics,
    //     name: 'Cosmetics'
    // },
    // {
    //     image: fitness,
    //     name: 'fitness'
    // }
];

const Products = () => {

    const items = products;
    const datas = DUMMY_DATA;
    const image = Dummy;

    return ( 
        <div className = "products">
            <div className = "row-col-2">
                <h3 className = "heading-primary">products</h3>
                <div className = "view-products">See all</div>
            </div>
            <div className = "row-col-5">
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
                <div className = "view-products">See all</div>
            </div>
            <div className="row-col-4">
                {datas.filter(data => data.category === 'vitamins').map(filteredItem =>
                    <div>
                        <img src = {Dummy} className = "item-image" />
                        <div class = "products-sub" >
                            { filteredItem.name }
                        </div>
                    </div> 
                )}
            </div>
            <hr />
        </div>
     );
}


export default Products;