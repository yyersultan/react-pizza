import { AuthActions, AuthActionsTypes } from "../actions/types"
import { AuthState } from "./types"

const initalState:AuthState = {
    loading: false,
    isAuth: false,
    username: '',
    password: '',
    error: null
}
const{SET_LOADING,SET_AUTH,SET_USER_DATA,SET_ERROR} = AuthActionsTypes
export const authReducer = (state = initalState,action:AuthActions):AuthState => {
    switch(action.type){
        case SET_LOADING:
            return{
                ...state,
                loading: action.payload
            }
        case SET_AUTH:
            return{
                ...state,
                isAuth: action.payload,
                loading: false,
                error: null
            }
        case SET_USER_DATA:
            return{
                ...state,
                username: action.payload.username,
                password: action.payload.password,
                loading: false,
                error: null
            } 
        case SET_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        default : return state
    }
}