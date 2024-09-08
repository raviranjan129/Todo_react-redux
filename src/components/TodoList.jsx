import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
function TodoList(){

    const todos=useSelector(state=> state.todosState.todos); 
return(
    <div>
        <h3>Todo List:</h3>
        {todos.map(todoItem=>{
            return(
                <TodoItem key={todoItem.id} id={todoItem.id} text={todoItem.text}  />
            )
        })}
    </div>
)
}

export default TodoList;