import axios from "axios";
import { type } from "os";
import { Dispatch } from "react";
import { PizzasAction, PizzasActionTypes } from "./types";



export const getPizzaList = (sortBy:string='',category:number|null = null) => async(dispath:Dispatch<PizzasAction>) => {
    try{
        dispath({type:PizzasActionTypes.FETCH_PIZZAS});
        if(category !== null){
            const {data} = await axios.get(`http://localhost:3001/pizzas?category=${category}&_sort=${sortBy}`);
            dispath({type:PizzasActionTypes.FETCH_PIZZAS_SUCCESS,payload:data});
        }else{
            const {data} = await axios.get(`http://localhost:3001/pizzas?_sort=${sortBy}`);
            dispath({type:PizzasActionTypes.FETCH_PIZZAS_SUCCESS,payload:data});
        }
        
    }catch(e){
        dispath({type:PizzasActionTypes.FETCH_PIZZAS_ERROR})
    }
}
export const setSortBy = (sortBy:string):PizzasAction => {
    return {
        type: PizzasActionTypes.SET_SORTBY,
        payload: sortBy
    }
}
export const setCategory = (category:number|null):PizzasAction => {
    return {
        type: PizzasActionTypes.SET_CATEGORY,
        payload:category
    }
}