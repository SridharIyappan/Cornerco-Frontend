// import DUMMY_DATA from './Products_Dummy_Data.js';
import one from '../../../images/Essential-Oils/1.jpeg';
import two from '../../../images/Essential-Oils/2.jpeg';
import three from '../../../images/Essential-Oils/3.jpeg';
import four from '../../../images/Essential-Oils/4.jpeg';
import five from '../../../images/Essential-Oils/5.jpeg';
import six from '../../../images/Essential-Oils/6.png';

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
 
export default EssentialOils;