import React, { useEffect, useState } from 'react'
import Icon from '../asset/img/icon.png'
import Heart from '../asset/img/heart.png'


const Article = ({title,content}) => {
  const [click, setClick]=useState(false);

  useEffect(()=>{
    console.log('title',title)
    console.log('content',content)

  },[])

  

  return (
    <div className="Article_wrap">
      <div className="title">{title}</div>
        <div className="content">
          <p>{content}</p>
          <div className="info_box">
            <div className="comment">
              <img src="{Icon}" alt="" />
              <p>0</p>
            </div>
            <div className="Like">
              <img src="{Heart}" alt="" />
            </div>
          </div>
        </div>
        <div className="comment_box">
          <input type="text" placeholder='댓글을 입력해주세요'/>
          <button>등록</button>
        </div>
    </div>
  )
}

export default Article