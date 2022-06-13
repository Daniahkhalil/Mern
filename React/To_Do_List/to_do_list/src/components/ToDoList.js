import React from 'react'
import { useState } from 'react'

export const ToDoList = () => {
    const [newTodo, setNewTodo]=useState("");
    const [todos,setTodos]=useState([]);

    const todoItem = {
        text:newTodo,
        complete:false
    };

    const handleNewTodoSubmit=(event) =>{
        event.preventDefault();
        if(newTodo.length === 0){
            return;
        }
        setTodos([...todos,todoItem]);
        setNewTodo("");
    }

    const handleTodoDelete=(delIdx) =>{
        const filteredTodos=todos.filter((todo,i)=>{
            return i != delIdx;
        })
        setTodos(filteredTodos);
    }

    const handelToggle =(idx)=>{
        const updatedTodos=todos.map((todo,i)=>{
            if(idx == i){
                todo.complete= !todo.complete;
            }
          return todo;
        });
        setTodos(updatedTodos);
    }
  return (
    <div style={{textAlign:"center"}}>
        <form onSubmit={(event)=>{
            handleNewTodoSubmit(event);
        }
        }>
           <input onChange={(event) =>{
            setNewTodo(event.target.value);
           }}
           value={newTodo}
           type="text"/> 
           <div>
            <button>Add</button>
           </div>
        </form>
        {todos.map((todo,i)=>{
            return <div key={i}>
                <input onChange={(event)=>{
                    handelToggle(i);
                }} checked={todo.complete} type="checkbox"/>
                <span>{todo.text}</span>
                <button onClick={(event) =>{
                    handleTodoDelete(i);
                }}>Delete</button>
            </div>;
        })

        }
    </div>
  )
}
