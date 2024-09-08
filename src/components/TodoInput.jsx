import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoActionCreator } from "../Redux/actions/todoAction";

function TodoInput(){
    const dispatch = useDispatch(); // this dispatch fucntion is already connected to the store;

    const [todo,setTodo] = useState('')

    function addTodoTostore(){
 dispatch(addTodoActionCreator(todo))
    }
return (
    <div>
        <input type="text" onChange={e=>setTodo(e.target.value)} value={todo} />
        <button onClick={addTodoTostore}>Add Todo ...</button>
    </div>
)
}

export default TodoInput;