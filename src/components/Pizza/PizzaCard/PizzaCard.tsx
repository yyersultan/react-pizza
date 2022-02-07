import styles from "./PizzaCard.module.css";
import { Dispatch, FC, useState } from "react";
import { Pizzas } from "../../../store/reducers/types";
import { pizza_sizes, types_list } from "../../../utils/contants";
import { addToCart } from "../../../store/actions/cart";


interface PizzaCardProps {
  pizza : Pizzas,
  dispatch: Dispatch<any>
}

export const PizzaCard:FC<PizzaCardProps> = ({pizza,dispatch}) => {
  

  const[curr,setCurr] = useState(pizza.sizes[0]);
  const[pizzaType,setPizzaType] = useState(pizza.types[0]);

  const price:number = Math.floor(pizza.price * (curr/10));
  const container:string[] = [styles.container,styles.pizzaBlock];

  const onAddClick = () => {
    const copy:Pizzas = {
      ...pizza,price,
      types:[pizzaType],
      sizes: [curr]
    }
    dispatch(addToCart(copy));
  }

  return (
    <div className={container.join(' ')}>
      <img className={styles.PizzaImg} src={pizza.imageUrl} alt="" />
      <h1 className={styles.title}>{pizza.name}</h1>
      
      <div className={styles.btnChooseGroup}>
        <div className={styles.btnTpyesGroup}>  
          {types_list.map((t,i) => (
            <button 
              key={t}
              onClick={() => setPizzaType(i)}
              className = {
              `${styles.btnAdd} ${i === pizzaType && styles.actBtn}`}
              disabled={!pizza.types.includes(i)}
              >{t}
            </button>))}
          
        </div>
        <div className={styles.btnSizeGroup}>
          {pizza_sizes.map((size,i) => {
            return <button 
                    key={`${size}^${i}`}
                    disabled={!pizza.sizes.includes(size)}
                    onClick={() => setCurr(size)}
                    className={`${styles.btnAdd}
                      ${size === curr && styles.actBtn}`}>
                        
                      {size}cm
                    </button>
          })}
        </div>
      
      </div>

      <div className={styles.btnGroup}>
        <span className={styles.price}>от {Math.floor(pizza.price * (curr/10))} P</span>
        <button 
          onClick={onAddClick}
          className={`${styles.btnAdd} ${styles.btnAddtoCard}`}>
          Add To Cart <i className="fas fa-plus-circle" />
        </button>
      </div>
    </div>
  );
};


// [0,1] => 'ronkoe', 'tradiconnoe'