import React from 'react'
import { useState } from 'react'
import '../Todo.scss'

const Todo_add = ({handleClosePopup}) => {
  
  return (
    <div id="Wrap_Todo_add">
        <h1>NEW NOTE</h1>
        <div className="add_input">
          <input type="text" placeholder='Input your note...' />
        </div>
        <div className="btn">
            <div className="cancel" onClick={handleClosePopup}>CANCEL</div>
           <div className="apply">APPLY</div>
        </div>     
    </div>
  )
}

export default Todo_add