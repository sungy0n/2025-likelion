import React, { useState } from 'react'
import del_icon from '../img/del_icon.svg'
import edit_icon from '../img/edit_icon.svg'

const Todo_item = ({text}) => {
  return (
    <div id="Wrap_Todo_item">
      <div className="text">
        <input type="checkbox" name="" id="" />
        <div className="todo_item">{text}</div>
      </div>
      <div className="icon">
        <img src={edit_icon} alt="" />
        <img src={del_icon} alt="" />
      </div>
    </div>
  )
}

export default Todo_item