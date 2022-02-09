import React, { FC, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { setCategory, setSortBy } from "../../store/actions/pizza";
import { categories, SortByList, sortByList } from "../../utils/contants";
import styles from './Filter.module.css';

export const Filter:FC = () => {
    const dispatch = useDispatch();
    const{category} = useTypedSelector(state => state.pizzas);
    const ref: React.RefObject<HTMLDivElement> = useRef(null);
    
    const[sortByName,setSortbyname] = useState('популярности');
    const[showList,setShowlist] = useState(false);
    
    
    
    useEffect(() => {
        function handleClickOutside(e:any) {
            if(ref.current && !ref.current.contains(e.target)){
                setShowlist(false);
            }
        }
       document.addEventListener('mousedown',handleClickOutside);

       return () => document.removeEventListener('mousedown',handleClickOutside)
        
    },[]);

    const onSortByItemClick = (name:SortByList) => {
        setSortbyname(name.ru);
        dispatch(setSortBy(name.name));
    }

    return (
        <div className={styles.Filter}>
            <ul className={styles.Category}>
                <li 
                 onClick={() => dispatch(setCategory(null))}
                 className={`${styles.categoryItem} 
                 ${category=== null && styles.activeCategory}`}
                >
                    все
                </li>
                {categories.map((c,index) => (
                    <li 
                    key={c}
                    onClick={() => dispatch(setCategory(index))}
                    className={styles.categoryItem + ' '+
                    (category === index ? styles.activeCategory:'')}>
                    {c}</li>
                ))}
            </ul>
            <div ref = {ref}
                onClick={() => setShowlist(prev=> !prev)}
                className={styles.SortBy}>

                    <div className={styles.SortByHeader}>
                        <p>
                            {showList ?  <i className="fas fa-caret-up"/>
                            :<i className="fas fa-caret-down"></i> }

                            Сортировка по:
                        </p>
                        <span className={styles.sortName}>{sortByName}</span>
                    </div>
                {showList && <ul className={styles.sotyByList}>
                    {sortByList.map((name) => (
                        <li 
                        className={styles.sortByListItem}
                        onClick={() => onSortByItemClick(name)}
                        key={name.name}>
                            {name.ru}
                        </li>
                    ))}
                </ul>}
            </div>
            
        </div>
    )
}