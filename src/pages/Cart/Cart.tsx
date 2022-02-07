import styles from "./Cart.module.css";
import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { CartItem } from "./CartItem";
import { OrderTotal } from "../../components/OrderTotal/OrderTotal";
import { EmptyCart } from "../../components/EmptyCart/EmptyCart";

export const Cart:React.FC = () => {
  const{items,totalPrice} = useTypedSelector(state => state.cart);

  if(!Object.keys(items).length){
    return <EmptyCart />
  }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th style={{textAlign:'left'}}>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Delete</th>
          </tr>
          {Object.keys(items).map((key,index) => (
            <CartItem 
              key={`${key}_@${index}`} 
              id = {key}
              count = {items[key].count}
              cart={items[key].item}/>
          ))}
          
        </table>
      </div>
      <OrderTotal totalPrice = {totalPrice}/>
    </div>
  );
};