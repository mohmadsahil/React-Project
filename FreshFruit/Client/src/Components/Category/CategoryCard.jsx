import React from 'react'
import styles from "./CategoryCard.module.css"
import { Button } from '../Button/Button'

export const CategoryCard = (props) => {
    const{Image , categoryName} = props;
  return (
    <div className={styles.mainCategoryCard}>
        <div className={styles.categoryCard}>
                <div className={styles.categoryCardImg}>
                        <img src={Image}/>
                </div>
                <div className={styles.categoryCardTextBtn}>
                    <p>{categoryName}</p>
                    <div className={styles.categoryCardBtn}>
                    <Button text="View All"/>
                    </div>
                </div>
        </div>
    </div>
  )
}
