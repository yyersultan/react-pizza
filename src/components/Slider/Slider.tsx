import arrowl from '../../assets/img/arrowl.png';
import arrowr from '../../assets/img/arrowr.png';
import styles from "./Slider.module.css";
import { useState } from "react";


export const Slider = () => {
 const [index, setIndex] = useState(0);
 const images = [
   "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/185001061/original/575d273286db5d27c139f5657781b002d99ddd09/design-pizza-banner-burger-flyer-food-flyer.jpg",
   "https://eskipaper.com/images/pizza-wallpaper-3.jpg",
   "https://pomodoropizza.co.za/wp-content/uploads/pizza-background.jpg",
 ];

 const handleArrow = (direction:string) =>{
     if(direction==="l"){
         setIndex(index !== 0 ? index-1 : 2)
     }
     if(direction==="r"){
         setIndex(index !== 2 ? index+1 : 0)
     }
 }

 return (
   <div className={styles.container}>
     <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
       <img src= {arrowl} alt="" />
     </div>
     <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
       {images.map((img, i) => (
         <div className={styles.imgContainer} key={i}>
           <img src={img} alt="" />
         </div>
       ))}
     </div>
     <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
       <img src={arrowr} />
     </div>
   </div>
 );
};