import { count } from "console";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { deleteCartItem } from "../../store/actions/cart";
import { Pizzas } from "../../store/reducers/types";
import { types_list } from "../../utils/contants";
import styles from "./Cart.module.css";

interface Cart{
    cart: Pizzas,
    count: number,
    id: string
}

export const CartItem:FC<Cart> = ({ cart,count,id }) => {
  const dispatch = useDispatch();

  const onDeleteItem = () => dispatch(deleteCartItem(id));

    return (
        <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <img
                  src={cart.imageUrl}
                  className={styles.pizzaImg}
                  alt=""
                  width={'100'}
                  height={'100'}
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>{cart.name}</span>
            </td>
            <td>
              <span className={styles.extras}>
                {cart.sizes[0]}cm , {types_list[cart.types[0]]}
              </span>
            </td>
            <td>
              <span className={styles.price}>{cart.price} P</span>
            </td>
            <td>
              <button>-</button>
              <span className={styles.quantity}>{count}</span>
              <button>+</button>
            </td>
            <td>
              <span className={styles.total}>{cart.price * count} P</span>
            </td>
            <td onClick={onDeleteItem}>
            <i className={`far fa-times-circle ${styles.deleteBtn}`} />
            </td>
          </tr>
    )
}