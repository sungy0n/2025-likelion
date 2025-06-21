import React from 'react';
import Line from '../../assets/img/Section01/line.png'
import Twitter from '../../assets/img/Section01/Twitter.png'
import Youtube from '../../assets/img/Section01/YouTube.png'
import Insta1 from '../../assets/img/Section01/Instagram (1).png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div id="Footer_wrap" className='wrap'>
       <div className="icons">
            <img src={Twitter} alt="" />
            <img src={Insta1} alt="" />
            <img src={Youtube} alt="" />
        </div>
        <div className="line">
            <img src={Line} alt="" />
        </div>
        <div className="info1">
            <p>support@openui.design
            <br />+60 825 876
            <br />08:00 - 22:00 - Everyday</p>
        </div>
        <div className="line">
            <img src={Line} alt="" />
        </div>
        <div className="info2">
            <Link to='/about' className='about'>
                <h1>About</h1>
            </Link>
            <Link to="/contact" className='contact'>
                <h1>Contact</h1>
            </Link>
            <Link to="/blog" className='blog'>
               <h1>Blog</h1>      
            </Link>
        </div>
        <div className='text'>Copyright© OpenUI All Rights Reserved.</div>
    </div>
  )
}

export default Footer