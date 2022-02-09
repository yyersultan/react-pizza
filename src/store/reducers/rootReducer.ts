import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { cartReducer } from "./cart";
import { pizzaReducer } from "./pizza";

export const rootReducer = combineReducers({
    pizzas: pizzaReducer,
    cart: cartReducer,
    auth: authReducer
})

export type RootState = ReturnType<typeof rootReducer>