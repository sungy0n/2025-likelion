import React from 'react'
import Line from '../../assets/img/Section01/line.png'
import Main2 from '../../assets/img/Apparel/Frame 18 (1).png'
import Voucher from '../../assets/img/Checkout/Voucher.png'
import Delivery from '../../assets/img/Checkout/Door to Door Delivery.png'
import Shop from '../../assets/img/Checkout/shopping bag.png'

const Checkout = () => {
  return (
    <div id="Checkout_wrap">
        <div className="nav"></div>
        <h1>CHECKOUT</h1>
        <div className="line">
            <img src={Line} alt="" />
        </div>
        <main>
            <div className="main1">
                <img src={Main2} alt="" />
                <div className="info">
                    <div className="text">
                        <p>LAMEREI</p>
                        <p className='gray'>Recycle Boucle Knit Cardigan Pink</p>
                    </div>
                    <div className="count">
                        <p className='btn'>-</p>
                        <p>1</p>
                        <p className='btn'>+</p>
                    </div>
                    <div className="price">$120</div>
                </div>
            </div>
            <div className="main2">
                <img src={Voucher} alt="" />
                <p>Add promo code</p>
            </div>
            <div className="main3">
                <div className="delivery">
                    <img src={Delivery} alt="" />
                    <p>Delivery</p>
                </div>
                <p>Free</p>
            </div>
        </main>
        <footer>
            <div className="footer1">
                <p>EST.TOTAL</p>
                <div className="price">
                    $240
                </div>
            </div>
            <div className="footer2">
                <img src={Shop} alt="" />
                <p>CHECKOUT</p>
            </div>
        </footer>
    </div>
  )
}

export default Checkout