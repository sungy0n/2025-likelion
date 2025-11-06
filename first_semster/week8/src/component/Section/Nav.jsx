import React, { useState, useEffect } from 'react';
import Logo from '../../assets/img/logo.png'
import Map from '../../assets/img/map.png'
import People from '../../assets/img/people.png'
import Search from '../../assets/img/search.png'
import Shopping from '../../assets/img/shopping.png'
import Main1 from '../../assets/img/Main1.png'
import Main2 from '../../assets/img/Main2.png'
import Main3 from '../../assets/img/Main3.png'
import Main4 from '../../assets/img/Main4.png'
import Main5 from '../../assets/img/Main5.png'


const Nav=()=>{
  const [currentImageIndex, setCurrentImageIndex]=useState(0);
  const backgrounds = [Main1, Main2, Main3, Main4, Main5];

   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 2000); // 2초마다 이미지 변경

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Nav_wrap" style={{
      backgroundImage: `url(${backgrounds[currentImageIndex]})`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      }}>
        <img src={Logo} alt="" />
        <ul className='menu'>
            <li>WOMEN</li>
            <li>MEN</li>
            <li>KIDS</li>
            <li className='line'>TENNIS</li>
            <li>BRAND</li>
        </ul>
        <div>
            <img src={Map} alt="" />
            <img src={People} alt="" />
            <img src={Search} alt="" />
            <img src={Shopping} alt="" />
        </div>
    </div>
  )
}
  


export default Nav