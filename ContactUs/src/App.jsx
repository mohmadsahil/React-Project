import './App.css'
import { Button } from './Components/Button/Button'
import { ContactForm } from './Components/ContactForm/ContactForm'
import { ContactHeader } from './Components/ContactHeader/ContactHeader'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <ContactHeader/>
      <ContactForm/>
    </>
  )
}

export default App
