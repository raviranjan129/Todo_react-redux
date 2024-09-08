import {combineReducers,createStore} from 'redux'
import userReducer from './Reducers/userReducer'
import todoReducer from './Reducers/todoReducer';

const rootReducer=combineReducers({
    todosState:todoReducer,
    usersState:userReducer
})

const store= createStore(rootReducer); // ToDo: add the relevant reducer;


export default store;