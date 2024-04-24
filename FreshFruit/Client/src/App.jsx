import './App.css'
import { AllProduct } from './Components/AllProductCard/AllProduct'
import { Category } from './Components/Category/Category'
import { MainContainer } from './Components/MainContainer/MainContainer'
import styles from "./Components/Navbar/Navbar.module.css"
import { useState } from 'react'



function App() {
    const [Search, setSearch] = useState('')
    console.log(Search)

  return (
    <>
      <div className={styles.mainNavbar} > 
        <h1>Rimberio</h1>
        <ul className={styles.navLinks}>
            <li>Home</li>
            <li>About Us</li>
            <li>Order</li>
            <input type="text" placeholder='Search Fresh Items...' value={Search} onChange={(e)=>setSearch(e.target.value)}/>
        </ul>
      </div>
      <MainContainer/>
      <Category/>
      <AllProduct SearchQuery={Search}/>
    </>
  )
}

export default App
