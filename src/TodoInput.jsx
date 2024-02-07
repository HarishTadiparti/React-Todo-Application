import { useState } from "react"


function TodoInput({addTask}){
    let [val, setVal] = useState("");

    let handleEventChange = (event) =>{
        setVal(event.target.value)
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        addTask(val);
        setVal("")
    }
    return(
        <form onSubmit={handleSubmit} className="TodoInput">
            <input type="text" placeholder="Add Todo" value={val} onChange={handleEventChange}/>
            <button type="submit" className="InputButton" >Add</button>
        </form>
    )
}

export default TodoInput