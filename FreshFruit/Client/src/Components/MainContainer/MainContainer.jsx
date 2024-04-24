import { Button } from "../Button/Button"
import styles from "./MainContainer.module.css"

export const MainContainer = () => {
  return (
    
    <div className={styles.containerMainDiv}>
        <div className={styles.leftMainDiv} >
              <h1>We Deliver Fresh Fruits, Veggies And Groceries At Your Doorstep !</h1>
              <Button text="Explore More..."/>
        </div>

        <div className={styles.rightMainDiv}>
              <img className={styles.rightMainDivImg} src="\public\Images\FreshFruits .png" alt=" Fresh Fruits,Veggies Img" srcset="" />
        </div>

    </div>
  )
}
