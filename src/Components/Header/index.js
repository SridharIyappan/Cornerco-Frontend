import React, {useState, useEffect} from 'react'
import MobileHeader from './Mobile_Header';
import PcHeader from './Pc-Header'

const Header = () => {

    const [screenWidth, setScreenWidth] = useState(null);

    useEffect(() => {
        console.log(screenWidth);
        setScreenWidth(window.innerWidth);
    }, [screenWidth]);

    return ( 
        <>
            {screenWidth >= 900 ? <PcHeader/> : <MobileHeader/>}
        </>
     );
}
 
export default Header;