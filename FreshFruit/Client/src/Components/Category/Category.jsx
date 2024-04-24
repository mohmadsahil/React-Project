import React from 'react'
import styles from "./Category.module.css"
import { CategoryCard } from './CategoryCard'

export const Category = () => {
  return (
    <div>
        <h1 className={styles.categoryText}>Explore Various Options For You To Pick</h1> 
        <div className={styles.mainCategoryCards}>   
            <CategoryCard categoryName="Vegetables" Image="public\Images\vegetables.png"/>
            <CategoryCard categoryName="Fruits" Image="public\Images\Fruits.png"/>
            <CategoryCard categoryName="Meats" Image="public\Images\Meats.png"/>
        </div>
    </div>
  )
}
