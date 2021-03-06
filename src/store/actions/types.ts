import { Pizzas } from "../reducers/types";

export enum PizzasActionTypes {
    FETCH_PIZZAS = 'FETCH_PRODUCTS',
    FETCH_PIZZAS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PIZZAS_ERROR = 'FETCH_PRODUCTS_ERROR',
    SET_SORTBY = 'SET_SORTBY',
    SET_CATEGORY='SET_CATEGORY'
}

interface FetchPizzasAction {
    type : PizzasActionTypes.FETCH_PIZZAS,
}
interface FetchPizzasSucces {
    type: PizzasActionTypes.FETCH_PIZZAS_SUCCESS,
    payload: Pizzas[]
}

interface FetchPizzasError {
    type: PizzasActionTypes.FETCH_PIZZAS_ERROR,
}
 interface SetSortby {
    type: PizzasActionTypes.SET_SORTBY,
    payload: string
}
 interface SetCategory {
    type: PizzasActionTypes.SET_CATEGORY,
    payload: number|null
}

export type PizzasAction  = FetchPizzasAction|
FetchPizzasSucces|FetchPizzasError|SetSortby
|SetCategory;

//  CART PAGE -----------------------------------------------------------------------------

export enum CartActionsTypes{
    ADD_TO_CART = 'ADD_TO_CART',
    DELETE_CART_ITEM = 'DELETE_CART_ITEM',
    PLUS_CART_ITEM = 'PLUS_CART_ITEM',
    MINUS_CART_ITEM = 'MINUS_CART_ITEM'
}
interface AddToCart {
    type: CartActionsTypes.ADD_TO_CART,
    payload: Pizzas
}
interface DeleteCartItem  {
    type: CartActionsTypes.DELETE_CART_ITEM,
    payload: string
}
interface PlusCartItem {
    type: CartActionsTypes.PLUS_CART_ITEM,
    payload: string // pizza's id
}
interface MinusCartItem {
    type: CartActionsTypes.MINUS_CART_ITEM,
    payload: string
} 
export type CartsAction = AddToCart|
DeleteCartItem|PlusCartItem|MinusCartItem;

//  AUTH PAGE --------------------------------------------------------------------------
export interface IUserData {
    username: string,
    password: string
}
export enum AuthActionsTypes {
    SET_LOADING='SET_LOADING',
    SET_AUTH = 'SET_AUTH',
    SET_USER_DATA = 'SET_USER_DATA',
    AUTH_LOGOUT = 'AUTH_LOGOUT',
    SET_ERROR = 'SET_ERROR'
}
interface SetLoading {
    type: AuthActionsTypes.SET_LOADING,
    payload: boolean
}
interface SetAuth {
    type: AuthActionsTypes.SET_AUTH,
    payload: boolean
}
interface SetUserData {
    type: AuthActionsTypes.SET_USER_DATA,
    payload:IUserData 
}
interface AuthLogout {
    type: AuthActionsTypes.AUTH_LOGOUT,
}
interface SetError {
    type: AuthActionsTypes.SET_ERROR,
    payload: string
}
export type AuthActions = SetLoading
|SetAuth|SetUserData | AuthLogout|SetError;