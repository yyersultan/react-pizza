import { FC, memo } from 'react';
import styles from '../../pages/Cart/Cart.module.css';
interface OrderTotalProps {
  totalPrice: number
}
export const OrderTotal:FC<OrderTotalProps> = memo(({totalPrice}) => {
    return (
        <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>{totalPrice} T
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>{totalPrice} T
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    )
})