import { PizzasAction, PizzasActionTypes } from "../actions/types"
import { Pizzas } from "./types"

interface PizzaState {
    pizzas:Pizzas[],
    loading:boolean,
    error:null | string,
    sortBy: string,
    category: number|null
}

const initalState:PizzaState = {
    pizzas:[],
    loading: true,
    error: null,
    sortBy:'rating',
    category : null
}
const {FETCH_PIZZAS,FETCH_PIZZAS_SUCCESS,SET_CATEGORY,
FETCH_PIZZAS_ERROR,SET_SORTBY} = PizzasActionTypes;
export const  pizzaReducer = (state=initalState,action:PizzasAction):PizzaState => {
    switch(action.type){
        case FETCH_PIZZAS:
            return{
                ...state,
                loading: true,
                error: null
            }
        case FETCH_PIZZAS_SUCCESS:
            return{
                ...state,
                pizzas: action.payload,
                loading: false,
                error: null
            }
        case FETCH_PIZZAS_ERROR:
            return {
                ...state,
                loading:false,
                error: 'Something was wrong !'
            }
        case SET_SORTBY:
            return{
                ...state,
                sortBy: action.payload
            }
        case SET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        default : return state;
    }
}