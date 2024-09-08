import { ADD_USER } from "../contants/constants"

export function addUserActionCreator(user){
    return {
        type:ADD_USER,
        payload:user
    }
}