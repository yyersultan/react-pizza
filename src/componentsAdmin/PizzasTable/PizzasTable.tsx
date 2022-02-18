import { Button, Table } from "antd";
import { FC, useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { PieChart } from "../../components/Charts/PieChart";
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { getPizzaList } from "../../store/actions/pizza";
import { Pizzas } from "../../store/reducers/types";
import { types_list } from "../../utils/contants";
import { PizzasModal } from "../PizzasModal/PizzasModal";
import styles from './PizzasTable.module.css';

const initalState:Pizzas = {
    id:0,
    imageUrl:'',
    name:'',
    price:0,
    sizes:[],
    category:0,
    types:[],
    rating:0,
    
}

export const PizzasTable:FC = () => {
    const {pizzas,loading} = useTypedSelector(state => state.pizzas);
    const dispatch = useDispatch();
    const[pizza,setPizza] = useState<Pizzas|null>(null);
    const[modal,setModal] = useState(false);
    const onEditClick = (pizzasItem:Pizzas) =>{
        setPizza(pizzasItem);
        setModal(true);
    }
    const onNewPizzaClick =() => {
        setPizza(initalState);
        setModal(true)
    }
    const columns = [
        {title:'Id',dataIndex:'id',sorter:true},
        {title:'ImageUrl',dataIndex:'imageUrl',
        render:(imgUrl:string) => <img src={imgUrl} alt={imgUrl} width='50' height={'50'}/>},   
        {title:'Name',dataIndex:'name',sorter:true,width:'20%'},   
        {title:'Types',dataIndex:'types',
        render:(typeArr:number[]) => <div>
            {typeArr.map(t => <span style={{marginLeft:'5px'}}>{types_list[t]}</span>)}
        </div> },   
        {title:'Sizes',dataIndex:'sizes',width:'20%',
        render:(arr:number[]) => <div>{arr.map(el => el + 'cm ').join(',')}</div> },   
        {title:'Price',dataIndex:'price',sorter:true},   
        {title:'Category',dataIndex:'category'},   
        {title:'Rating',dataIndex:'rating',sorter:true},   
        {title:'Edit',dataIndex:'edit',render:(text:any,record:Pizzas) => <Button onClick={() => onEditClick(record)} >Edit</Button>},   
        {title:'Delete',dataIndex:'delete',render:() => <Button danger type="primary">Delete</Button>},   
    ]
    useEffect(() => {
        dispatch(getPizzaList());
    },[dispatch]);
   
    const handleTableChange = (pagination:any,filters:any,sorter:any) => {
        let ord = (sorter.order+'') === 'ascend' ? 'asc':'desc'
        dispatch(getPizzaList(sorter.field,null, ord));
    }
    return(
        <div className={styles.PizzasTable}>
            <Button onClick={onNewPizzaClick}>New Pizza</Button>
            <Table 
            loading = {loading}
            onChange={handleTableChange}
            columns={columns} 
            dataSource={pizzas}/>
            <PizzasModal setModal = {setModal} modal = {modal}  pizzas={pizza}/>
           <PieChart  pizzas={pizzas}/>
        </div>
    )
}