import { CartActionsTypes, CartsAction } from "../actions/types"
import { CartItems,Items } from "./types"



const initialState:CartItems = {
    items : {},
    totalPrice:0,
    totalCount:0
}
const{ ADD_TO_CART,DELETE_CART_ITEM,PLUS_CART_ITEM,MINUS_CART_ITEM } = CartActionsTypes;

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
            return {...state,items,totalPrice: getTotalPrice(items)}
        case DELETE_CART_ITEM: 
            const cart_items = {...state.items};
            delete cart_items[action.payload];
            return {
                ...state,
                items: cart_items,
                totalPrice: getTotalPrice(cart_items)
            }
        case PLUS_CART_ITEM:
            const items_copy = {...state.items};
            items_copy[action.payload].count += 1; 
            return {
                ...state,
                items: items_copy,
                totalPrice: getTotalPrice({...state.items})
            }
        case MINUS_CART_ITEM:
            const copy_items = {...state.items};
            if(copy_items[action.payload].count > 1){
                copy_items[action.payload].count -= 1;
            }
            return {
                ...state,
                items: copy_items,
                totalPrice: getTotalPrice(copy_items)
            }
        default : return state
    }
}

function getTotalPrice(items:Items):number {
    let count:number = 0;
    Object.keys(items).forEach(key => {
        const c = items[key].count;
        const item = items[key].item.price;
        count += (c * item);
    });
    return count;
}