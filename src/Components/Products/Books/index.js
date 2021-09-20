// import DUMMY_DATA from './Products_Dummy_Data.js';
import one from '../../../images/Books/1.jpeg';
import two from '../../../images/Books/2.jpeg';
import three from '../../../images/Books/3.jpeg';
import four from '../../../images/Books/4.jpeg';
import five from '../../../images/Books/5.png';
import six from '../../../images/Books/6.jpeg';

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



const Books = () => {
    return (
        <>
            {items.map(item =>
                <div>
                    <img src = {item.image} className = "item-image" />
                    <div class = "products-sub" >
                        { item.name }
                    </div>
                    <button className = "add-to-cart">Add To Cart</button>
                </div> 
            )}
        </>
     );
}
 
export default Books;