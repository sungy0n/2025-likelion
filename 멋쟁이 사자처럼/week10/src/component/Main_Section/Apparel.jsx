import React from 'react'
import Grid from '../../assets/img/Apparel/grid view.png'
import Filter from '../../assets/img/Apparel/Filter.png'
import P from '../../assets/img/Apparel/Polygon 1.png'
import Star from '../../assets/img/Apparel/Star 1.png'
import Heart from '../../assets/img/Apparel/Union.png'
import Main1 from '../../assets/img/Apparel/Frame 18.png'
import Main2 from '../../assets/img/Apparel/Frame 18 (1).png'
import Main3 from '../../assets/img/Apparel/Frame 18 (2).png'
import Main4 from '../../assets/img/Apparel/Frame 18 (3).png'
import Main5 from '../../assets/img/Apparel/Frame 18 (4).png'
import Main6 from '../../assets/img/Apparel/Frame 18 (5).png'
import Main7 from '../../assets/img/Apparel/Frame 18 (6).png'
import Main8 from '../../assets/img/Apparel/Frame 18 (7).png'
import Main9 from '../../assets/img/Apparel/Frame 18 (8).png'
import Main10 from '../../assets/img/Apparel/Frame 18 (9).png'
import { Link } from 'react-router-dom'

const Apparel = () => {
  return (
    <div id="Apparel_wrap">
        <div className="nav"></div>
        <header>
            <p>4500 APPAREL</p>
            <div className="setting">
                <div className="new">
                    <p>New</p>
                    <img src={P} alt="" />
                </div>
                <div className="grid">
                    <img src={Grid} alt="" />    
                </div>
                <div className="filter">
                    <img src={Filter} alt="" />
                </div>
            </div>
        </header>
        <main>  
            <div className="main1">
                <img className='product' src={Main1} alt="" />  
                <div className="content">
                    <div className="info">
                        <h1>LAMEREI</h1>
                        <p>Recycle Boucle Knit Cardigan Pink</p>
                        <p className='price'>$120</p>
                    </div>
                    <div className="review">
                        <img src={Star} alt="" />
                        <p>4.8 Ratings</p>
                    </div>
                    <div className="size">
                        <div className="size1">
                            <p>Size</p>
                            <p className='circle'>S</p>
                            <p className='circle'>M</p>
                            <p className='circle'>L</p>
                        </div>
                        <div className="size2">
                            <img src={Heart} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="main2">
                <Link to='/product'>
                    <img className='product' src={Main2} alt="" />
                </Link>
                <div className="content">
                    <div className="info">
                        <h1>LAMEREI</h1>
                        <p>Recycle Boucle Knit Cardigan Pink</p>
                        <p className='price'>$120</p>
                    </div>
                    <div className="review">
                        <img src={Star} alt="" />
                        <p>4.8 Ratings</p>
                    </div>
                    <div className="size">
                        <div className="size1">
                            <p>Size</p>
                            <p className='circle'>S</p>
                            <p className='circle'>M</p>
                            <p className='circle'>L</p>
                        </div>
                        <div className="size2">
                            <img src={Heart} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="main3">
                <img className='product' src={Main3} alt="" />
                <div className="content">
                    <div className="info">
                        <h1>LAMEREI</h1>
                        <p>Recycle Boucle Knit Cardigan Pink</p>
                        <p className='price'>$120</p>
                    </div>
                    <div className="review">
                        <img src={Star} alt="" />
                        <p>4.8 Ratings</p>
                    </div>
                    <div className="size">
                        <div className="size1">
                            <p>Size</p>
                            <p className='circle'>S</p>
                            <p className='circle'>M</p>
                            <p className='circle'>L</p>
                        </div>
                        <div className="size2">
                            <img src={Heart} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="main4">
                <img className='product' src={Main4} alt="" />
                <div className="content">
                    <div className="info">
                        <h1>LAMEREI</h1>
                        <p>Recycle Boucle Knit Cardigan Pink</p>
                        <p className='price'>$120</p>
                    </div>
                    <div className="review">
                        <img src={Star} alt="" />
                        <p>4.8 Ratings</p>
                    </div>
                    <div className="size">
                        <div className="size1">
                            <p>Size</p>
                            <p className='circle'>S</p>
                            <p className='circle'>M</p>
                            <p className='circle'>L</p>
                        </div>
                        <div className="size2">
                            <img src={Heart} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="main5">
                <img className='product' src={Main5} alt="" />
                <div className="content">
                    <div className="info">
                        <h1>LAMEREI</h1>
                        <p>Recycle Boucle Knit Cardigan Pink</p>
                        <p className='price'>$120</p>
                    </div>
                    <div className="review">
                        <img src={Star} alt="" />
                        <p>4.8 Ratings</p>
                    </div>
                    <div className="size">
                        <div className="size1">
                            <p>Size</p>
                            <p className='circle'>S</p>
                            <p className='circle'>M</p>
                            <p className='circle'>L</p>
                        </div>
                        <div className="size2">
                            <img src={Heart} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="main6">
                <img className='product' src={Main6} alt="" />
                <div className="content">
                    <div className="info">
                        <h1>LAMEREI</h1>
                        <p>Recycle Boucle Knit Cardigan Pink</p>
                        <p className='price'>$120</p>
                    </div>
                    <div className="review">
                        <img src={Star} alt="" />
                        <p>4.8 Ratings</p>
                    </div>
                    <div className="size">
                        <div className="size1">
                            <p>Size</p>
                            <p className='circle'>S</p>
                            <p className='circle'>M</p>
                            <p className='circle'>L</p>
                        </div>
                        <div className="size2">
                            <img src={Heart} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="main7">
                <img className='product' src={Main7} alt="" />
                <div className="content">
                    <div className="info">
                        <h1>LAMEREI</h1>
                        <p>Recycle Boucle Knit Cardigan Pink</p>
                        <p className='price'>$120</p>
                    </div>
                    <div className="review">
                        <img src={Star} alt="" />
                        <p>4.8 Ratings</p>
                    </div>
                    <div className="size">
                        <div className="size1">
                            <p>Size</p>
                            <p className='circle'>S</p>
                            <p className='circle'>M</p>
                            <p className='circle'>L</p>
                        </div>
                        <div className="size2">
                            <img src={Heart} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="main8">
                <img className='product' src={Main8} alt="" />
                <div className="content">
                    <div className="info">
                        <h1>LAMEREI</h1>
                        <p>Recycle Boucle Knit Cardigan Pink</p>
                        <p className='price'>$120</p>
                    </div>
                    <div className="review">
                        <img src={Star} alt="" />
                        <p>4.8 Ratings</p>
                    </div>
                    <div className="size">
                        <div className="size1">
                            <p>Size</p>
                            <p className='circle'>S</p>
                            <p className='circle'>M</p>
                            <p className='circle'>L</p>
                        </div>
                        <div className="size2">
                            <img src={Heart} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="main9">
                <img className='product' src={Main9} alt="" />
                <div className="content">
                    <div className="info">
                        <h1>LAMEREI</h1>
                        <p>Recycle Boucle Knit Cardigan Pink</p>
                        <p className='price'>$120</p>
                    </div>
                    <div className="review">
                        <img src={Star} alt="" />
                        <p>4.8 Ratings</p>
                    </div>
                    <div className="size">
                        <div className="size1">
                            <p>Size</p>
                            <p className='circle'>S</p>
                            <p className='circle'>M</p>
                            <p className='circle'>L</p>
                        </div>
                        <div className="size2">
                            <img src={Heart} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="main10">
                <img className='product' src={Main10} alt="" />
                <div className="content">
                    <div className="info">
                        <h1>LAMEREI</h1>
                        <p>Recycle Boucle Knit Cardigan Pink</p>
                        <p className='price'>$120</p>
                    </div>
                    <div className="review">
                        <img src={Star} alt="" />
                        <p>4.8 Ratings</p>
                    </div>
                    <div className="size">
                        <div className="size1">
                            <p>Size</p>
                            <p className='circle'>S</p>
                            <p className='circle'>M</p>
                            <p className='circle'>L</p>
                        </div>
                        <div className="size2">
                            <img src={Heart} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <div className="step">
                <p>1</p>
            </div>
            <div className="page">
                <p>2</p>
            </div>
            <div className="page">
                <p>3</p>
            </div>
            <div className="page">
                <p>4</p>
            </div>
            <div className="page">
                <p>5</p>
            </div>
            <div>
                〉
            </div>
        </footer>
    </div>
  )
}

export default Apparel