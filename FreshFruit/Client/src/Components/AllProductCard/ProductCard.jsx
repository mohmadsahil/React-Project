import React from 'react'
import styles from "./ProductCard.module.css";
import { Button } from '../Button/Button';
import { FaRegHeart } from "react-icons/fa";


export const ProductCard = (props) => {
    const {productName , productPrice , productImg} = props;
  return (
    <>
        <div className={styles.mainProductCardDiv}>
            
                <div className={styles.mainProductCard}>

                        <div className={styles.productCardImg}>
                            <img src={productImg} alt="Mango Image" srcset="" />
                        </div>

                        <div className={styles.productCardDes}>
                            <div className={styles.productCardName}>
                                <h1>{productName}</h1>
                            </div>
                            <div className={styles.productCardPrice}>
                                <h1>{productPrice}</h1>
                            </div>
                        </div>

                        <div className={styles.buttonSection}>
                            <div className={styles.heartButton}><FaRegHeart/></div>
                            <Button text ="Add To Cart"/>
                        </div>
                </div>
        </div>
    </>
  )
}
