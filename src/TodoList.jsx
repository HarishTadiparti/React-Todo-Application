import { useState } from "react";


function TodoList({todos, handleDone, handleDelete, handleEdit, setEdit}){
    let [inputVal, setInputVal] = useState("")


    let onEdit = (task, id) => {
        setInputVal(task)
        handleEdit(id);
    }

    let handleEditChange = (event) => {
        setInputVal(event.target.value)
    }

    let handleEditDone = (id) => {
        setEdit(inputVal, id);
        setInputVal("");
    }


    let checkBoxStyle = {
        backgroundColor: "#181818",
    }
    let listStyle = {
        color: "#A3A3A3",
        textDecoration: "line-through"
    }

    return(
        <div className="todoList">
            {
                todos.map((todo) => (
                    <div className="todo" key={todo.id}>
                        <div className="todo-left">
                            <div className="checkbox" onClick={() => handleDone(todo.id)} style={todo.isDone ? checkBoxStyle : null}>
                                {
                                    todo.isDone && <i className="fa-solid fa-check"></i>
                                }
                            </div>
                            <div  style={todo.isDone ? listStyle : null}>
                                {
                                    todo.isEdit ? <input className="EditInput" type="text" value={inputVal} onChange={handleEditChange} /> : todo.task
                                }
                                
                            </div>
                            
                        </div>
                        <div className="todo-right">
                            {
                                todo.isEdit ? <button className="EditButton" onClick={() => handleEditDone(todo.id)} >Done</button> : <div className="todoRight-buttons">
                                    <i className="fa-solid fa-pen" onClick={() => onEdit(todo.task, todo.id)}></i>
                                    <i className="fa-solid fa-trash" onClick={() => handleDelete(todo.id)}></i>
                                </div>
                            }
                            
                        </div>

                    </div>
                ))
            }
            
        </div>
    )
}

export default TodoList