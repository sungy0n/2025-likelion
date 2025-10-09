import React from 'react'
import { useState } from 'react'
import '../Todo.scss'
import Todo_Add from './Todo_Add'
import Todo_item from './Todo_Item'
import search_icon from '../img/search_icon.svg'
import search1_icon from '../img/search1_icon.svg'
import search2_icon from '../img/search2_icon.svg'
import add_icon from '../img/add_icon.svg'

const Todo = () => {
    const [todoList, setTodoList] = useState([]);
    const [isAdding, setIsAdding] = useState(false);

    const handleAddItem = (newText)=>{
        if(newText.trim()==='') return;
        setTodoList([...todoList,newText]);
        setIsAdding(false);
    }

  return (
    <div id="Wrap_Todo">
        <h1 className="title">TODO LIST</h1>
        <div className="search">
            <div className="search_input">
                <input type="text" name="" id="" placeholder='Search note...' />
                <img className='search_icon' src={search_icon} alt="" />
            </div>
            <div className="search1">
                <p>ALL</p>
                <img src={search1_icon} alt="" />
            </div>
            <div className="search2">
                <img className='search2_icon' src={search2_icon} alt="" />
            </div>
        </div>
        <div className="todo_list_container">
            {todoList.map((item)=>(
                <Todo_item 
                text={item.text}
                />
            ))}
        </div>
        <div className="add">
            <img className='add_icon' src={add_icon} alt="" />
        </div>
    </div>
  )
}

export default Todo