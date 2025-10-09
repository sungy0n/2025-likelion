import React from 'react'
import { useState } from 'react'
import '../Todo.scss'
import Todo_Add from './Todo_Add'
import search_icon from '../img/search_icon.svg'
import search1_icon from '../img/search1_icon.svg'
import search2_icon from '../img/search2_icon.svg'
import add_icon from '../img/add_icon.svg'
import del_icon from '../img/del_icon.svg'
import edit_icon from '../img/edit_icon.svg'

const Todo = () => {
    // Todo_Add 팝업
    const [isVisable, setIsVisible] = useState(false);

    const handleOpenPopup = () =>{
        setIsVisible(true);
    }
    const handleClosePopup = () =>{
        setIsVisible(false);
    }

    //Todo 리스트
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text: text,
        };
        setTodos([...todos, newTodo]);
    };

    const handleDeleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
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
        {todos.map(todo => (
            <div className="todo_list">
                <div className="text">
                    <input type="checkbox" name="" id="" />
                    <div className="todo_item">{todo.text}</div>
                </div>
                <div className="icon">
                    <img src={edit_icon} alt="" />
                    <img src={del_icon} alt="" onClick={handleDeleteTodo} />
                </div>
            </div>
        ))}
        <div className="add" onClick={handleOpenPopup}>
            <img className='add_icon' src={add_icon} alt="" />
        </div>
        {isVisable && <Todo_Add onclose={handleClosePopup} onAdd={handleAddTodo}/>}
    </div>
  )
}

export default Todo