import React from 'react'
import Section02_1 from '../../assets/img/Section02_1.png'
import Section02_2 from '../../assets/img/Section02_2.png'
import Section02_3 from '../../assets/img/Section02_3.png'
import Section02_4 from '../../assets/img/Section02_4.png'
import Section02_5 from '../../assets/img/Section02_5.png'
import Section02_6 from '../../assets/img/Section2_6.jpg'
import Heart from '../../assets/img/heart.png'

const Section01 = () => {
     const items = [
    { img: Section02_1, name: '공용 컴포넌트 라이프 스타일', title: 'COLD WAVE 그래픽 프린트 냉감티셔츠', price: '49,000원' },
    { img: Section02_2, name: '공용 컴포넌트 라이프 스타일', title: 'COLD WAVE 그래픽 프린트 냉감티셔츠', price: '49,000원' },
    { img: Section02_3, name: '공용 컴포넌트 라이프 스타일', title: 'COLD WAVE 그래픽 프린트 냉감티셔츠', price: '49,000원' },
    { img: Section02_4, name: '공용 컴포넌트 라이프 스타일', title: 'COLD WAVE 그래픽 프린트 냉감티셔츠', price: '49,000원' },
    { img: Section02_5, name: '공용 컴포넌트 라이프 스타일', title: 'COLD WAVE 그래픽 프린트 냉감티셔츠', price: '49,000원' },
    { img: Section02_6, name: '공용 컴포넌트 라이프 스타일', title: 'COLD WAVE 그래픽 프린트 냉감티셔츠', price: '49,000원' }
  ];
    
  return (
    <div className="Section01_wrap">
      <h1>지금 많이 찾는 상품</h1>
      <ul>
        <li className='black'>#냉감티셔츠</li>
        <li>#에샤페</li>
        <li>#반팔티셔츠</li>
        <li>#페이토&샌들</li>
        <li>#인터런</li>
      </ul>
     <div className='scroll'>
        <div className="scroll-wrap">
          {items.map((item, idx) => (
            <div key={idx} className="item">
              <img src={item.img} alt="" />
              <p>{item.name}</p>
              <div className="title">{item.title}</div>
              <div className='info'>
                <div className="price">{item.price}</div>
                <img src={Heart} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section01