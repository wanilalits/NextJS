"use client"
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addTodos, removeTodos } from '../redux/slice2'




function TodoList() {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();
    const userDispatch = () => {
        dispatch(addTodos(todo))
    }
    //const todoData1=useSelector((data)=>data);
    // console.log(todoData1)
    //const todoData=[];
    const todoData = useSelector((data) => data.todasData.todos);
    return (
        <div>
            <h1>Add List (no local storage access)</h1>
            <br></br>
            <input type='text'
                onChange={(e) => (setTodo(e.target.value))}
                className="add-user-input"
                placeholder='Add Todos'>
            </input>
            <button onClick={userDispatch}>Add Todo</button>

            {
                todoData.length >= 1 && todoData.map((item, id) => (
                    <>

                        <div key={item.id}>
                            <span> {id + 1} </span>
                            {item.name}
                            <span> <button onClick={() => dispatch(removeTodos(item.id))}>Remove</button> </span>
                        </div>

                    </>
                ))
            }
        </div>
    );
}

export default TodoList;
