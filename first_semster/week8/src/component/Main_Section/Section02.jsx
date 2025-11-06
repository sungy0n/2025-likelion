import React from 'react'
import Section03_1 from '../../assets/img/Section03_1.png'
import Section03_2 from '../../assets/img/Section03_2.png'

const Section02 = () => {
  return (
    <div className="Section2_wrap">
      <h1>기획전</h1>
      <div>
        <div>
          <img src={Section03_1} alt="" />
          <div className="text">FILA CUSTOM STUDIO</div>
          <div className="detail">자세히 보기</div>
        </div>
        <div>
          <img src={Section03_2} alt="" />
          <div className="text">Pertex LIfe</div>
          <div className="detail">자세히 보기</div>
        </div>
      </div>
    </div>
  )
}

export default Section02