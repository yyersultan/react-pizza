export const types_list:string[] = ['Тонкое','традиционное'];
export const pizza_sizes:number[] = [26,30,40];
export const categories:string[] = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export  interface SortByList{
    name:string,
    ru: string,
    orderBy: string
}

export const sortByList:SortByList[] =  [
    {name:'rating',ru:'популярности',orderBy:'asc'},
    {name: 'price',ru: 'цене',orderBy:'asc'},
    {name:'name',ru:'алфавит',orderBy:'asc'}
]