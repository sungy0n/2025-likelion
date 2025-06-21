import React from 'react'
import Line from '../../assets/img/Section01/line.png'
import Img from '../../assets/img/About/image 3 (1).png'

const About = () => {
  return (
    <div id="About_wrap">
        <div className="nav"></div>
        <h1>OUR STORY</h1>
        <div className="line">
            <img src={Line} alt="" />
        </div>
        <div className="text">
            <p>
            Open Fashion - Free Ecommerce UI Kit is a
            <br />free download UI kit. You can open Open
            <br />Fashion - Free Ecommerce UI Kit file by 
            <br />Figma. 
            </p>
            <p>
                Create stunning shop with bulletproof 
                <br />guidelines and thoughtful components. Its
                <br />library contains more than 50+ components
                <br />supporting Light & Dark Mode and 60+
                <br />ready to use mobile screens.
            </p>
        </div>
        <img src={Img} alt="" />
        <div className="sign">
            <h1>SIGN UP</h1>
            <div className="line">
                <img src={Line} alt="" />
            </div>
            <div className="text">
                <p>
                Receive early access to new arrivals, sales, 
                <br />exclusive content, events and much more!
                </p>
            </div>
            <div className="address">
                <input type="text" placeholder='Email adress' className='email'/>
                <div className="line"></div>
            </div>
            <div className="submit">
                <p>SUBMIT</p>
                <p>→</p>
            </div>
        </div>
    </div>
  )
}

export default About