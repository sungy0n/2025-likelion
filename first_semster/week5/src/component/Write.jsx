import React, { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import Article from './Article';

const Write = () => {
  const[show, setShow]=useState(false);
  const[title,setTitle]=useState();
  const[content,setContent]=useState();
  const navigate=useNavigate();

  const handleClick=()=>{
    navigate(-1)
  }

  const Going=()=>{
    if(!(title&&content)){
      alert('내용을 입력하세요!') 
      return
    }
    setShow(true);
  }

  return (
    <>
      {show?(
        <Article title={title} content={content}/>
      ):(
        <div className='Write_wrap'>
          <input value={title} onChange={(e) => {setTitle(e.target.value)}} className='title' type="text" placeholder='제목을 입력해주세요!' />
          <textarea value={content} onChange={(e) => {setContent(e.target.value)}} className='content' placeholder='내용을 입력해주세요!' />
          <div className="button_box" onChange={(e)=>setContent(e.target.value)} >
            <button className='delete' onClick={()=>{handleClick()}} >취소하기</button>
            <button className='write' onClick={()=>{Going(true)}} >작성하기</button>
          </div>
      </div>
      )}
    </>
  )
}

export default Write