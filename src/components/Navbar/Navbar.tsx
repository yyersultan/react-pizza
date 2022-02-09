import styles from './Navbar.module.css';
import telephone from '../../assets/img/telephone.png';
import logo from '../../assets/img/logo.png';
import cart from '../../assets/img/cart.png'
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useTranslation } from 'react-i18next';


export const Navbar:React.FC = () => {
  const{items} = useTypedSelector(state => state.cart);

  
  const count_prod:number = Object.keys(items).length;
    return (
        <div className={styles.container}>
          <div className={styles.item}>
            <div className={styles.callButton}>
              <img src= {telephone} alt="" width="32" height="32" />
            </div>
            <div className={styles.texts}>
              <div className={styles.text}>ORDER NOW</div>
              <div className={styles.text}>777 971 6217</div>
            </div>
          </div>
          <div className={styles.item}>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <NavLink to={'/'}>Home </NavLink>
                </li>
              <img src={logo} alt="" width="160px" height="69px" />
              <li className={styles.listItem}>
                <NavLink to={'/login'}> Admin </NavLink> 
              </li>
            </ul>
          </div>
          <div className={styles.item}>
            <NavLink to={'/cart'} className={styles.cart}>
              <img src= {cart} alt="" width="30px" height="30px" />
              <div className={styles.counter}>{count_prod}</div>
            </NavLink>
          </div>
        </div>
      );
}