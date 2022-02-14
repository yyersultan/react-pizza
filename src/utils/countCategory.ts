import { categories } from "./contants";

export interface ICategory {
    [key:string]:number
}
export interface IPieDataCategory {
    type: string,
    value:number
}

export const countCategory = (arr:number[]):IPieDataCategory[] => {
    const list:string[] = arr.map(i => categories[i-1] || 'Соломки');
    console.log(arr);
    
    const obj:ICategory = {} as ICategory;
    for(const i of list){
        obj[i] = obj[i] ? ++obj[i]: 1;
    }
    const res:IPieDataCategory[] = [];
    Object.keys(obj).forEach(el => {
        res.push({type:el,value:obj[el]})
    })
    return res
}