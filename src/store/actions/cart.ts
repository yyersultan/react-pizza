import { Pizzas } from "../reducers/types";
import { CartActionsTypes, CartsAction } from "./types";

export const addToCart = (pizza:Pizzas):CartsAction => {
    return {
        type: CartActionsTypes.ADD_TO_CART,
        payload:pizza
    }
}
export const deleteCartItem = (id: string):CartsAction => {
    return {
        type: CartActionsTypes.DELETE_CART_ITEM,
        payload: id
    }
}
export const plusCartItem = (id:string):CartsAction => {
    return {
        type: CartActionsTypes.PLUS_CART_ITEM,
        payload:id
    }
}
export const minusCartItem = (id:string):CartsAction => {
    return {
        type: CartActionsTypes.MINUS_CART_ITEM,
        payload: id
    }
}