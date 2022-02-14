import { Button } from 'antd';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../store/actions/auth';
import styles from './NavbarAdmin.module.css';

export const NavbarAdmin:FC = () => {
    const dispatch = useDispatch();

    const logoutHandle = () => dispatch(logout());

    return (
        <div className={styles.NavbarAdmin}>
            <ul className={styles.NavbarAdminList}>
               <li><NavLink to={'/admin/profile'}>Profile</NavLink></li>
               <li><NavLink to={'/admin/drinks'}>Drinks</NavLink></li>
               <li><NavLink to={'/admin/pizzas'}>Pizzas</NavLink></li>
               <Button onClick={logoutHandle} type='primary'>Logout</Button>
            </ul>
        </div>
    )
}