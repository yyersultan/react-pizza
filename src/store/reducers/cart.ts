import { CartActionsTypes, CartsAction } from "../actions/types"
import { CartItems } from "./types"



const initialState:CartItems = {
    items : {},
    totalPrice:0,
    totalCount:0
}
const{ ADD_TO_CART,DELETE_CART_ITEM } = CartActionsTypes
export const cartReducer = (state=initialState,action:CartsAction):CartItems => {
    switch(action.type){
        case ADD_TO_CART:
            const items = {...state.items};
            const key = `${action.payload.id}_${action.payload.sizes[0]}_${action.payload.types[0]}`;
            if(items[key]){
                const cartItem = {...items[key]};
                cartItem.count += 1;
                items[key] = cartItem;
            }else{
                items[key] = {
                    item : action.payload,
                    count: 1,
                    price:0
                }
            }
            return {...state,items}
        case DELETE_CART_ITEM: 
            const cart_items = {...state.items};
            delete cart_items[action.payload];
            return {
                ...state,
                items: cart_items
            }
        default : return state
    }
}