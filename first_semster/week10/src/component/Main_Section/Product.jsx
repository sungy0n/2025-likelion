import React from 'react'
import { Link } from 'react-router-dom'
import Img from '../../assets/img/Product/Group 268.png'
import Export from '../../assets/img/Product/Export.png'
import Heart_w from '../../assets/img/Product/Heart.png'
import Icon1 from '../../assets/img/Product/Do Not Bleach.png'
import Icon2 from '../../assets/img/Product/Do Not Tumble Dry.png'
import Icon3 from '../../assets/img/Product/Do Not Wash.png'
import Icon4 from '../../assets/img/Product/Iron Low Temperature.png'
import Ship from '../../assets/img/Product/Shipping.png'
import Tag from '../../assets/img/Product/Tag.png'
import Refresh from '../../assets/img/Product/Refresh.png'
import Con1 from '../../assets/img/Product/Frame 18 (10).png'
import Con2 from '../../assets/img/Product/Frame 18 (11).png'
import Con3 from '../../assets/img/Product/Frame 18 (12).png'
import Con4 from '../../assets/img/Product/Frame 18 (13).png'
import Line from '../../assets/img/Section01/line.png'

const Product = () => {
  return (
    <div id="Product_wrap">
        <div className="nav"></div>
        <img src={Img} alt="" />
        <main>
            <div className="info">
                <div className="product">
                <p>MOHAN</p>
                    <div className="download">
                        <img src={Export} alt="" />
                    </div>
                </div>
                <p>Recycle Boucle Knit Cardigan Pink</p>
                <p className='price'>$120</p>
            </div>
            <div className="detail">
                <div className="color">
                    <p className='title'>Color</p>
                    <div className="black">
                        <div id="select"></div>
                    </div>
                    <div className="pink"></div>
                    <div className="gray"></div>
                </div>
                <div className="size">
                    <p className='title'>size</p>
                    <p id='select' className='s'>S</p>
                    <p className='s'>M</p>
                    <p className='s'>L</p>
                </div>
            </div>
        </main>
        <Link to='/checkout' className='link'>
            <div className="add">
                <p>+ ADD TO BASKET</p>
                <img src={Heart_w} alt="" />
            </div>
        </Link>
        <div className="text">
            <div className="text1">
                <p className='title'>MATERIALS</p>
                <p>We work with monitoring programmes to ensure 
                    <br />compliance with safety, health and quality 
                    <br />standards for our products. 
                </p>
            </div>
            <div className="text2">
                <p className='title'>CARE</p>
                <p>To keep your jackets and coats clean, you only
                    <br />need to freshen them up and go over them with 
                    <br />cloth or a clothes brush. If you need to dry clean
                    <br />a garment, look for a dry cleaner that uses 
                    <br />technologies that are respectful of the 
                    <br />environment.
                </p>
            </div>
            <div className="text3">
                <div className="icon1">
                    <img src={Icon1} alt="" />
                    <p>Do not use bleach</p>
                </div>
                <div className="icon2">
                    <img src={Icon2} alt="" />
                    <p>Do not tumble dry</p>
                </div>
                <div className="icon3">
                    <img src={Icon3} alt="" />
                    <p>Dry clean with tetrachloroethylene</p>
                </div>
                <div className="icon4">
                    <img src={Icon4} alt="" />
                    <p>Iron at a maximum of 110ºC/230ºF</p>
                </div>
            </div>
            <div className="text4">
                <p>CARE</p>
                <div className="care1">
                    <div className="content1">
                        <div className="box">
                            <img src={Ship} alt="" />
                            <p className='black'>Free Flat Rate Shipping</p>
                        </div>
                        <p>︿</p>
                    </div>
                    <div className="content2">
                        <p>Estimated to be delivered on 
                        <br />09/11/2021 - 12/11/2021.</p>
                    </div>
                </div>
                <div className="care2">
                    <div className="box">
                        <img src={Tag} alt="" />
                        <p>COD Policy</p>
                    </div>
                    <p>﹀</p>
                </div>
            </div>
            <div className="care3">
                <div className="box">
                    <img src={Refresh} alt="" />
                    <p>Return Policy</p>
                </div>
                <p>﹀</p>
            </div>
        </div>
        <div className="container">
            <h1>YOU MAY ALSO LIKE</h1>
            <div className="line">
                <img src={Line} alt="" />
            </div>
            <div className="container1">
                <div className="Con1">
                    <img src={Con1} alt="" />
                    <div className="info">
                        <p>21WN</p>
                        <p className='con'>reversible angora cardigan</p>
                        <p className='price'>$120</p>
                    </div>
                </div>
                <div className="Con2">
                    <img src={Con2} alt="" />
                    <div className="info">
                        <p>lamerei</p>
                        <p className='con'>reversible angora cardigan</p>
                        <p className='price'>$120</p>
                    </div>
                </div>
            </div>
            <div className="container2">
                <div className="Con3">
                    <img src={Con3} alt="" />
                    <div className="info">
                        <p>21WN</p>
                        <p className='con'>reversible angora cardigan</p>
                        <p className='price'>$120</p>
                    </div>
                </div>
                <div className="Con4">
                    <img src={Con4} alt="" />
                    <div className="info">
                        <p>lamerei</p>
                        <p>reversible angora cardigan</p>
                        <p className='price'>$120</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product