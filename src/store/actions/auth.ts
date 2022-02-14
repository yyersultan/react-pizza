import { Dispatch } from "react"
import { authApi } from "../../api/api";
import { AuthActions, AuthActionsTypes, IUserData } from "./types";

export const setLoadingAc = (payload: boolean):AuthActions => {
    return {
        type: AuthActionsTypes.SET_LOADING,
        payload
    }
}

export const setAuthAc = (payload:boolean):AuthActions => {
    return{
        type: AuthActionsTypes.SET_AUTH,
        payload
    }
}

export const setUserDataAc = (payload:IUserData):AuthActions => {
    return{
        type: AuthActionsTypes.SET_USER_DATA,
        payload
    }
}

export const setErrorAc = (payload:string):AuthActions => {
    return {
        type: AuthActionsTypes.SET_ERROR,
        payload
    }
}

export const login = (userData:IUserData) => async(dispatch:Dispatch<AuthActions>) => {
    try{
        dispatch(setLoadingAc(true));

        const data = await authApi.login();
        const isUser = data.find(d => d.username === userData.username 
        && d.password === userData.password);
        sleep(1000).then(() => {
            if(isUser){
                localStorage.setItem('isAuth','true');
                localStorage.setItem('userData',JSON.stringify(userData));
                dispatch(setAuthAc(true));
                dispatch(setUserDataAc(userData));
            }else{
                dispatch(setErrorAc('Username or password incorrect !'));
            } 
        });
       
    }catch(e){
        console.log(e);
    }
}
export const logout = () => async(dispatch:Dispatch<AuthActions>) => {
    localStorage.removeItem('isAuth');
    localStorage.removeItem('userData');
    dispatch(setAuthAc(false));
    dispatch(setUserDataAc({} as IUserData))
}
export function sleep(timer:number):Promise<any> {
    return new Promise((res) => {
        setTimeout(() => {
            res('');
        },timer)
    })
}