import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
//import { render } from '@testing-library/react';
import banner1 from '../img/bannerReptiles.png';
import banner2 from '../img/bannerReptiles1.png';
import banner3 from '../img/bannerReptiles2.png';

function Banner(){
    const [index,setIndex]=useState(0);

    const handleSelect = (selectedIndex, e)=>{
        setIndex(selectedIndex);
    };
    return(
        <Carousel 
        active={index} 
        onSelect={handleSelect}
        >
            <Carousel.Item>
                <img
                className="d-block w-100" src={banner1} alt="First"
                />
            </Carousel.Item>
            <Carousel.Item>
        <img
          className="d-block w-100" src={banner2}alt="Second slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />
        </Carousel.Item>
        </Carousel>
    );
}

//render(<Banner/>);
export default Banner;