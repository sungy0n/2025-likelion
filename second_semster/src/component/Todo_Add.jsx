import React from 'react'
import { useState } from 'react'
import '../Todo.scss'

const Todo_add = () => {
  
  const [inputValue, setInputValue] = useState('')
  const handleApply = () =>{
    onAddItem(inputValue);
  }

  return (
    <div id="Wrap_Todo_add">
        <h1>NEW NOTE</h1>
        <div className="add_input">
            <input value={inputValue} onChange={(event)=>setInputValue(event.target.value)} type="text" name="" id="" placeholder='Input your note...' />
        </div>
        <div className="btn">
            <div className="cancel">CANCEL</div>
           <div className="apply" onClick={handleApply}>APPLY</div>
        </div>     
    </div>
  )
}

export default Todo_add