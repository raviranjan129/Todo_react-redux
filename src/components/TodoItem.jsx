import { useDispatch } from "react-redux";
import { removeTodoCreator } from "../Redux/actions/todoAction";

function TodoItem({id,text,isCompleted}){
    const dispatch = useDispatch()

    function removeTodo(){
dispatch(removeTodoCreator(id))
    }

return (
    <div>
        <input type="checkbox" checked={isCompleted} />
        <p>{text}</p>
        <button onClick={removeTodo} >X</button>
    </div>
)

}

export default TodoItem;