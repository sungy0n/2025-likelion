import React from 'react'
import Call from '../../assets/img/Menu/Call.png'
import Location from '../../assets/img/Menu/Location.png'
import Forwrad from '../../assets/img/Menu/Forward.png'
import { Link } from 'react-router-dom'
import Line from '../../assets/img/Section01/line.png'
import Twitter from '../../assets/img/Section01/Twitter.png'
import Youtube from '../../assets/img/Section01/YouTube.png'
import Insta1 from '../../assets/img/Section01/Instagram (1).png'

const Menu = () => {
  return (
    <div id="Menu_wrap">
        <Link to='/' className='back'>
            ✕
        </Link>
        <ul className='menu1'>
            <li className='black'>WOMEN</li>
            <li>MAN</li>
            <li>KIDS</li>
        </ul>
        <ul className='menu2'>
            <li>
                <p>New</p>
                <img src={Forwrad} alt="" />
            </li>
            <li>
                <Link to='/apparel' className='link'>
                    <p>Apparel</p>
                </Link>
                <img src={Forwrad} alt="" />
            </li>
            <li>
                <p>Bag</p>
                <img src={Forwrad} alt="" />
            </li>
            <li>
                <p>Shoes</p>
                <img src={Forwrad} alt="" />
            </li>
            <li>
                <p>Beauty</p>
                <img src={Forwrad} alt="" />
            </li>
            <li>
                <p>Accessories</p>
                <img src={Forwrad} alt="" />
            </li>
        </ul>
        <div className="num">
            <img src={Call} alt="" />
            <p>(786) 713-8616</p>
        </div>
        <div className="map">
            <img src={Location} alt="" />
            <p>Store locator</p>
        </div>
        <footer>
            <div className="line">
                <img src={Line} alt="" />
            </div>
            <div className="sns">
                <img src={Twitter} alt="" />
                <img src={Insta1} alt="" />
                <img src={Youtube} alt="" />
            </div>
        </footer>
    </div>
  )
}

export default Menu