import empty_img from './empty_cart.jpg';
import styles from './EmptyCart.module.css';
import { Link } from 'react-router-dom';

export const EmptyCart = () => {
    return (
        <div className={styles.EmptyCart}>
            <h1 className={styles.EmptyCartHeader}>Упс, корзина пусто :)</h1>
            <Link className={styles.backBtn} to={'/'}>вернуться в меню</Link>
            <img src={empty_img} 
            width={'600'}
            height={'600'}
            alt="" />
        </div>
    )
}