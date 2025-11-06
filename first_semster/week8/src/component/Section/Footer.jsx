import React from 'react'
import Logo2 from '../../assets/img/logo2.png'

const Footer = () => {
  return (
    <div className="Footer_wrap">
      <img src={Logo2} alt="" />
      <div className="left">
        <div className="footer">
          <ul>
            <li className='line'>매장안내</li>
            <li className='line'>공지사항</li>
            <li className='line'>FILA MEMBERSHIP</li>
            <li className='line'>단체 판매</li>
            <li className='line'>대리점 개설문의</li>
            <li>FILA 입찰 참여 안내 </li>
        </ul>
        <div className="section">
            <p>서울특별시 성북구 보문로 35 흴라코리아(주) 대표이사:김지헌</p>
            <div className='box'>
                <p>사업자등록번호:716-81-01573</p>
                <p>사업자정보확인</p>
                <p>통신판매업신고 : 제 2020-서울강동-0160호</p>
            </div>
            <p>개인정보 관리책임자:이학우</p>
            <br />
            <p>본 사이트의 상품이미지 저작권은 휠라코리아(주)에 있으며, 내용의 무단복제를 금합니다.</p>
            <div className='box'>
                <p>콘텐츠산업진흥법에 의한 콘텐츠보호안내</p>
                <p>자세히보기</p>
            </div>
        </div>
        <ul>
            <li className='line'>통합회원 이용약관</li>
            <li className='line'>개인정보 처리방침</li>
            <li>제보센터</li>
        </ul>
        </div>
      </div>
      <div className="right">
        <div className="cs">CS CENTER</div>
        <div className="call">1577-3472</div>
        <div className="mail">filaonline@fila.com</div>
        <div className="info">평일 월-금: 09시-18시(공휴일 제외)</div>
        <div className="bottom">
          <p>KOREA</p>
          <p>FAMILY SITE</p>
        </div>
      </div>
    </div>
  )
}

export default Footer