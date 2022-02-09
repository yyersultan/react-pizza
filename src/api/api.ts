import axios from "axios"
import { IUserData } from "../store/actions/types";

export const authApi = {
    login:async():Promise<IUserData[]> =>  {
        const {data} =  await axios.get<IUserData[]>('./users.json');
        return data;
    }
}