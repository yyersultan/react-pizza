
export interface Pizzas {
    id:number,
    imageUrl:string,
    name:string,
    types:number[],
    sizes:number[],
    price:number,
    category:number,
    rating:number
}

interface Item {
    item: Pizzas,
    count: number,
    price: number
}
export interface Items {
    [key:string]:Item
}
//  Cart ITEMS
export interface CartItems {
    items:Items,
    totalCount:number,
    totalPrice:number
}

// AUTH TYPES 
export interface AuthState {
    isAuth: boolean,
    username: string,
    password: string,
    loading: boolean,
    error: string|null
}