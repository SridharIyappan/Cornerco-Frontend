import {useState, useEffect} from 'react'
import MobileHeader from './Mobile_Header';
import PcHeader from './Pc-Header'

const Header = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    console.log(window.innerWidth);

    useEffect(() => {
        console.log(screenWidth);
        setScreenWidth(window.innerWidth);
    }, [window.innerWidth]);

    return ( 
        <>
            {screenWidth >= 900 ? <PcHeader /> : <MobileHeader />}
            
        </>
     );
}
 
export default Header;