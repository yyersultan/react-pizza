import { Pie,measureTextWidth } from "@ant-design/charts";
import { Button, Table } from "antd";
import { FC, useEffect } from "react"
import { useDispatch } from "react-redux";
import { PieChart } from "../../components/Charts/PieChart";
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { getPizzaList } from "../../store/actions/pizza";
import { types_list } from "../../utils/contants";

export const PizzasTable:FC = () => {
    const {pizzas,loading} = useTypedSelector(state => state.pizzas);
    const dispatch = useDispatch();
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
        {title:'Edit',dataIndex:'edit',render:(text:any,record:any) => <Button onClick={() => console.log(text)} >Edit</Button>},   
        {title:'Delete',dataIndex:'delete',render:() => <Button danger type="primary">Delete</Button>},   
    ]
    useEffect(() => {
        dispatch(getPizzaList());
    },[dispatch]);
   
    const handleTableChange = (pagination:any,filters:any,sorter:any) => {
        console.log(sorter);
        let ord = (sorter.order+'') === 'ascend' ? 'asc':'desc'
        dispatch(getPizzaList(sorter.field,null, ord));
    }
    return(
        <div>
            <Table 
            loading = {loading}
            onChange={handleTableChange}
            columns={columns} 
            dataSource={pizzas}/>
           <PieChart pizzas={pizzas}/>
        </div>
    )
}