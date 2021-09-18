// import DUMMY_DATA from './Products_Dummy_Data.js';
import one from '../../../images/Vitamins/1.jpeg';
import two from '../../../images/Vitamins/2.jpeg';
import three from '../../../images/Vitamins/3.jpeg';
import four from '../../../images/Vitamins/4.jpeg';
import five from '../../../images/Vitamins/5.jpeg';
import six from '../../../images/Vitamins/6.jpeg';

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



const Vitamins = () => {
    return (
        <>
            {items.map(item =>
                <div>
                    <img src = {item.image} className = "item-image" />
                    <div class = "products-sub" >
                        { item.name }
                    </div>
                </div> 
            )}
        </>
     );
}
 
export default Vitamins;