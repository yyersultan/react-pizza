import styles from "./PizzaCard.module.css";
import pizzaImage from '../../../assets/img/pizza.png';

export const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <img src={pizzaImage} alt="" width="400" height="400" />
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};
