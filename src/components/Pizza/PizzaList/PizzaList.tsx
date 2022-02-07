
import styles from "./PizzaList.module.css";
import {PizzaCard} from "../PizzaCard/PizzaCard"
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { getPizzaList } from "../../../store/actions/pizza";
import {MyLoader} from '../../Sceleton/Sceleton';

export const PizzaList:React.FC = () => {
  const dispatch = useDispatch();
  const {pizzas,sortBy,category,loading} = useTypedSelector(state=> state.pizzas);

  useEffect(() => {
    dispatch(getPizzaList(sortBy,category));
  },[sortBy,category]);
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      
      <div className={styles.wrapper}>
          {loading ? Array(6).fill(0).map(el => <MyLoader />) : pizzas.map((pizza) => (
          <PizzaCard  
          key={pizza.id}
          dispatch = {dispatch}
          pizza = {pizza}/>))}
      </div>
    </div>
  );
};
