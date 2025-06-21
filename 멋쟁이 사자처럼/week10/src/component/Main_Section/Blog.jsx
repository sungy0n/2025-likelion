import React from 'react'
import Line from '../../assets/img/Section01/line.png'
import Section02_1 from '../../assets/img/Blog/Section02_1.png'
import Section02_2 from '../../assets/img/Blog/Section02_2.png'
import Section02_3 from '../../assets/img/Blog/Section02_3.png'
import Section02_4 from '../../assets/img/Blog/Section02_4.png'


const Blog = () => {
  return (
    <div id="Blog_wrap" className='wrap'>
      <div className="nav"></div>
      <h1>BLOG</h1>
      <div className="line">
        <img src={Line} alt="" />
      </div>
      <ul>
        <li>Fashoin</li>
        <li>Promo</li>
        <li>Policy</li>
        <li>Lookbook</li>
        <li>Sale</li>
      </ul>
      <main>
        <div className="main1">
          <img src={Section02_1} alt="" />
          <div className="content">
            <div className="hashtag">
              <p>#Fashion</p>
              <p>Tips</p>
            </div>
            <p>4 days ago</p>
          </div>
          </div>
          <div className="main2">
            <img src={Section02_2} alt="" />
            <div className="content">
              <div className="hashtag">
                <p>#Fashion</p>
                <p>#Tips</p>
              </div>
              <p>4 days ago</p>
            </div>
          </div>
        <div className="main3">
          <img src={Section02_3} alt="" />
          <div className="content">
            <div className="hashtag">
              <p>#Fashion</p>
              <p>#Tips</p>
            </div>
            <p>4 days ago</p>
          </div>
        </div>
        <div className="main4">
          <img src={Section02_4} alt="" />
          <div className="content">
            <div className="hashtag">
              <p>#Fashion</p>
              <p>#Tips</p>
            </div>
            <p>4 days ago</p>
          </div>
        </div>
      </main>
      <div className="more">
        <p>LOAD MORE +</p>
      </div>
    </div>
  )
}

export default Blog