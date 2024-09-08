import { ADD_USER } from "../contants/constants";

const initialState = {
    user:[]
}

export default function userReducer(state=initialState,action){
    if(action.type===ADD_USER){
        return {
            ...state,
            users:[
                ...state.user,
                action.payload
            ]
        }
    }else{
        return state;
    }
}
