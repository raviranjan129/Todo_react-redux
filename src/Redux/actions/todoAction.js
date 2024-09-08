import { ADD_TODO,REMOVE_TODO,TOGGLE_TODO } from "../contants/constants"

export function addTodoActionCreator(todo){
    return {
        type:ADD_TODO,
        payload:todo
    }
}

export function removeTodoCreator(todoId){
    return {
        type:REMOVE_TODO,
        payload:todoId
    }
}

 export function toggleTodoActionCreator(todoId){
    return{
        type:TOGGLE_TODO,
        payload:todoId 
    }
}


