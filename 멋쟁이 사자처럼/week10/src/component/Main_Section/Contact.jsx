import React from 'react'
import Line from '../../assets/img/Section01/line.png'
import Chat from '../../assets/img/Contact/Chat Message.png'
import Add from '../../assets/img/Contact/Add Message.png'
import Twitter from '../../assets/img/Contact/Twitter (1).png'

const Contact = () => {
  return (
    <div id="Contact_wrap">
        <div className="nav"></div>
        <h1 className='title'>CONTACT US</h1>
        <div className="line">
            <img src={Line} alt="" />
        </div>
        <div className="box1">
            <img src={Chat} alt="" />
            <p>Need an ASAP answer? Contact us via chat,
                <br />24/7! For existing furniture orders, please
                <br />call us.
            </p>
            <div className="btn">
                <h1>CHAT WITH US</h1>
            </div>
        </div>
        <div className="box2">
            <img src={Add} alt="" />
            <p>You can text us at 800-309-2622 – or click 
                <br />on the “text us” link below on your mobile 
                <br />device. Please allow the system to 
                <br />acknowledge a simple greeting (even “Hi” 
                <br />will do!) before providing your question/
                <br />order details. Consent is not required for 
                <br />any purchase. Message and data rates may
                <br />apply. Text messaging may not be available
                <br />via all carriers.
            </p>
            <div className="btn">
                <h1>TEXT US</h1>
            </div>
        </div>
        <div className="box3">
            <img src={Twitter} alt="" />
            <p>To send us a private or direct message, like
                <br />@Open Fashion on Facebook or follow us 
                <br />on Twitter. We’ll get back to you ASAP. 
                <br />Please include your name, order number, 
                <br />and email address for a faster response!
            </p>
        </div>
    </div>
  )
}

export default Contact