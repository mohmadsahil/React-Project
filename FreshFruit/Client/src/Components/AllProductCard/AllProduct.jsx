import React, { useEffect, useState } from 'react'
import { ProductCard } from './ProductCard'
import styles from "./AllProduct.module.css"


export const AllProduct = (props) => {
  const [data, setData] = useState([])

  useEffect(()=>{
    findCardData()
  },[props])

  const findCardData=()=>{
      let p = fetch('http://localhost:9000/')
      p.then((data)=>{
      return data.json()
      }).then((res)=>{
      setData(res.Data)
      console.log(res)
      if(props.SearchQuery!==""){
        setData(res.Data.filter((item)=> (item.name).toLowerCase().includes(props.SearchQuery)))
        console.log(data)
      }
    })
  }

  return (
    <div>
        <center className={styles.allProductText}>All Products</center> 
        <div className={styles.allProductContainer}>
            {
              data.map((item)=>{
                return(
                  <ProductCard className={styles.AllProductCart} productImg={item.image} productName={item.name} productPrice ={item.price}/>
                )
              })
            }
        </div>
    </div>
  )
}
