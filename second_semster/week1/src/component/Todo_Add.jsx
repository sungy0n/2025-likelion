import React from 'react'
import { useState } from 'react'
import '../Todo.scss'

const Todo_add = ({onclose, onAdd}) => {

  const [inputText, setInputText] = useState('');

  const handleApplyClikk = () => {
    if(inputText.trim() === ''){
        alert('내용을 입력해주세요')  
        return;
    }
    onAdd(inputText);
    onclose();
  }; 
  
  return (
    <div id="Wrap_Todo_add">
        <h1>NEW NOTE</h1>
        <div className="add_input">
          <input type="text" placeholder='Input your note...' value={inputText} onChange={(e)=>setInputText(e.target.value)} />
        </div>
        <div className="btn">
            <div className="cancel" onClick={onclose}>CANCEL</div>
           <div className="apply" onClick={handleApplyClikk} >APPLY</div>
        </div>     
    </div>
  )
}

export default Todo_add