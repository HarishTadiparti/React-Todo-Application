import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';


function TodoApp(){

    let [todos, setTodos] = useState([{ id: uuidv4(), task: "Sample Task", isDone: false ,isEdit: false }]);

    let addTask = (todo) => {
        setTodos([...todos, { id: uuidv4(), task: todo, isEdit: false, isDone: false}])
    }

    let handleDone = (id) => {
        setTodos(todos.map((todo) => {
            if(todo.id == id){
                return {...todo, isDone: !todo.isDone}
            }
            else{
                return {...todo}
            }
        }))
    }

    let todoDelete = (id) =>{
        setTodos(todos.filter((todo) => todo.id != id))
    }

    let todoEdit = (id) => {
        setTodos(todos.map((todo) => {
            if(todo.id == id){
                return { ...todo, isEdit: !todo.isEdit }
            }
            else{
                return {...todo, isEdit: false}
            }
        }))
    }

    let setEdit = (val, id) => {
        setTodos(todos.map((todo) => {
            if(todo.id == id){
                return {...todo, task: val, isEdit: false}
            }
            else{
                return {...todo}
            }
        }))
    }
    return(
        <div className="TodoApp">
            <h2>Todo List</h2>
            <br />
            <TodoInput addTask={addTask}/>
            <TodoList todos={todos} handleDone={handleDone} handleDelete={todoDelete} handleEdit={todoEdit} setEdit={setEdit}/>
        </div>
    )
}

export default TodoApp;