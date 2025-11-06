import App from "../App"
import { Route } from "react-router-dom";
import plus from '../img/plus.png'
import X from '../img/X.png'
import style from '../scss/style.css'
import React,{ useState } from "react";


const Todo= () => {
    const [input,setInput]=useState("");
    const [todo,setTodo]=useState([]);
    
    const handleInputChange = (e) => setInput(e.target.value);

    const handleAddTodo = () => {
        if(input.trim()==="" || todo.length>=5)
            return;
        setTodo([...todo,{ text: input, completed: false }]);
        setInput("");
    };


    const handleDeleteTodo=(indexTodoDelete)=>{
        setTodo(todo.filter((_,index)=>index
    !==indexTodoDelete));
    };

    const handleToggleCompleted =(index)=>{
        setTodo(todo.map((item,i)=>
        i===index?{...item,completed:!item.completed}
    :item
        ));
    };


return (
    <div className="Todo_wrap">
    <div className="section">
        <div className="title">TO-DO-LIST</div>
        <div className="input">
            <input type="text" placeholder="오늘 할 일을 입력해주세요!" 
            value={input} onChange={handleInputChange} />
            <button className="btn" onClick={handleAddTodo}><img src={plus} alt="" /></button>
        </div>
        <div className="main">
            {todo.map((item, index)=>(
                <div className="list" key={index} >
                    <div className="content">
                        <input type="checkbox" className="check" checked={item.completed} onChange={()=>handleToggleCompleted(index)}/>
                        <p style={{textDecoration:item.completed ? "line-through":"none"}} >{item.text}</p>
                    </div> 
                <button className="btn" onClick={()=> handleDeleteTodo(index)} ><img src={X} alt="" /></button>
                </div>
            ))}
        </div>
    </div>
    </div>
);

};

export default Todo;