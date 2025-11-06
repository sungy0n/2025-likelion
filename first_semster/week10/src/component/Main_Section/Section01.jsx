import React from 'react'
import Main from '../../assets/img/Section01/main.png'
import Page from '../../assets/img/Section01/page.png'
import All1 from '../../assets/img/Section01/All1.png'
import All2 from '../../assets/img/Section01/All2.png'
import All3 from '../../assets/img/Section01/All3.png'
import All4 from '../../assets/img/Section01/All4.png'
import Line from '../../assets/img/Section01/line.png'
import Brand from '../../assets/img/Section01/Brand.png'
import Collection1 from '../../assets/img/Section01/collection1.png'
import Collection2 from '../../assets/img/Section01/collection2.png'
import Collection3 from '../../assets/img/Section01/collection3.png'
import Img2 from '../../assets/img/Section01/img2.png'
import Page2 from '../../assets/img/Section01/page2.png'
import Logo from '../../assets/img/Nav/Logo.png'
import Box1 from '../../assets/img/Section01/Miroodles Sticker.png'
import Box2 from '../../assets/img/Section01/Miroodles Sticker (1).png'
import Box3 from '../../assets/img/Section01/Miroodles Sticker (2).png'
import Box4 from '../../assets/img/Section01/Miroodles Sticker (3).png'
import A from '../../assets/img/Section01/a.png'
import Insta from '../../assets/img/Section01/Instagram.png'
import Mia from '../../assets/img/Section01/Group 257.png'
import Jihyn from '../../assets/img/Section01/Group 258.png'
import Mia1 from '../../assets/img/Section01/Group 259.png'
import Jihyn2 from '../../assets/img/Section01/Group 260.png'


const Section01 = () => {
  return (
    <div id="Section01_wrap" className='wrap'>
        <div className="nav"></div>
      <div className="section01">
        <img src={Main} alt="" />
        <div className="title">
          <h1>Luxury
          <br />FASHION
          <br />&ACCESSORIES</h1>
        </div>
        <div className="explore">
          <p>Explore Collection</p>
        </div>
        <div className="page">
          <img src={Page} alt="" />
        </div>
      </div>
      <div id='section01_1' className="wrap">
        <h1>NEW ARRIVAL</h1>
        <div className="line">
            <img src={Line} alt="" />
        </div>
        <ul>
            <li className='black'>All</li>
            <li>Apparel</li>
            <li>Dress</li>
            <li>Tshirt</li>
            <li>Bag</li>
        </ul>
        <main>
           <div className="main1">
            <div className="left">
                <img src={All1} alt="" />
                <div className="title">
                    21WN reversible angora
                </div>
                <div className="title">
                    cardigun
                </div>
                <div className="price">
                    $120
                </div>
            </div>
            <div className="right">
                <img src={All2} alt="" />
                <div className="title">
                    21WN reversible angora
                </div>
                <div className="title">
                    cardigun
                </div>
                <div className="price">
                    $120
                </div>
            </div>
           </div>
           <div className="main2">
            <div className="left">
                <img src={All3} alt="" />
                <div className="title">
                    21WN reversible angora
                </div>
                <div className="title">
                    cardigun
                </div>
                <div className="price">
                    $120
                </div>
            </div>
            <div className="right">
                <img src={All4} alt="" />
                <div className="title">
                    21WN reversible angora
                </div>
                <div className="title">
                    cardigun
                </div>
                <div className="price">
                    $120
                </div>
            </div>
           </div>
           <div className="more">
            Explore More →
           </div>
           <div className="brand">
            <img src={Brand} alt="" />
           </div>
        </main>
      </div>
      <div id="section01_2" className='wrap'>
        <h1>COLLECTION</h1>
        <div className="images">
            <img src={Collection1} alt="" />
            <img src={Collection2} alt=""  width={260} height={296}/>
            <img src={Collection3} alt="" />
        </div>
      </div>
      <div id="section01_3" className='wrap'>
        <h1>JUST FOR YOU</h1>
        <div className="line">
            <img src={Line} alt="" />
        </div>
        <div className="images">
            <div className="img1">
                <img src={All2} alt="" width={254} height={311} />
                <div className="title">
                    Harris Tweed Three button
                </div>
                <div className="title">
                    Jacket
                </div>
                <div className="price">
                    $120
                </div>
            </div>
            <div className="img2">
                <img src={Img2} alt="" width={254} height={311} />
                <div className="title">
                    Cashmere Blend Cropped
                </div>
                <div className="title">
                    Jacket SW1WJ285-AM
                </div>
                <div className="price">
                    $120
                </div>
            </div>
        </div>
        <div className="page">
            <img src={Page2} alt="" />
        </div>
        <div className="trending">
            <h1>@TRENDING</h1>
            <div className="group">
                <div className="top">
                    <p>#2021</p>
                    <p>#spring</p>
                    <p>#colloection</p>
                    <p>#fall</p>
                </div>
                <div className="bottom">
                    <p>#dress</p>
                    <p>#actumncollection</p>
                    <p>#openfashion</p>
                </div>
            </div>
        </div>
      </div>
      <div id="section01_4">
        <img src={Logo} alt="" />
        <p>Making a luxurious lifestyle accessible
        <br />for a generous group of women is our
        <br />daily drive.</p>
        <div className="line">
            <img src={Line} alt="" />
        </div>
        <div className="box">
            <div className="box1">
                <div className="top">
                <img src={Box1} alt="" />
                <p>Fast shipping. Free on
                    <br />orders over $25.
                </p>
            </div>
            <div className="bottom">
                <img src={Box2} alt="" />
                <p>Sustainable process 
                    <br />from start to finish.
                </p>
            </div>
            </div>
             <div className="box2">
                <div className="top">
                    <img src={Box3} alt="" />
                    <p>Unique designs
                        <br />and high-quality materials.
                    </p>
                </div>
                <div className="bottom">
                    <img src={Box4} alt="" />
                    <p>Fast shipping. 
                        <br />Free on orders over $25.
                    </p>
                </div>
           </div>
        </div>
        <div className="style">
            <img src={A} alt="" />
        </div>
      </div>
      <div id="section01_5" className='wrap'>
        <h1>FOLLOW US</h1>
        <div className="insta">
            <img src={Insta} alt="" />
        </div>
        <div className="container">
            <div className="container1">
                <img src={Mia} alt="" />
                <img src={Jihyn} alt="" />
            </div>
            <div className="container2">
                <img src={Mia1} alt="" />
                <img src={Jihyn2} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section01