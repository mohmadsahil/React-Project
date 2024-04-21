import React from 'react'
import styles from "./Navbar.module.css"


export const Navbar = () => {
  return (
    <div className={styles.mainNavbar}> 
        <h1>Rimberio</h1>
        <ul className={styles.navLinks}>
            <li>Home</li>
            <li>About Us</li>
            <li>Order</li>
            <input type="text" placeholder='Search Fresh Items...'/>
        </ul>
    </div>
  )
}
