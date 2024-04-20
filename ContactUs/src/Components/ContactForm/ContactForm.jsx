import { Button } from "../Button/Button"
import styles from "./ContactForm.module.css"
import { MdMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { useState } from "react";



export const ContactForm = () => {

  const [Name,SetName] = useState(" ");
  const [Email,SetEmail] = useState(" ");
  const [Message,SetMessage] = useState("");

  const onSubmitEvent = (event)=>{
      event.preventDefault();
      SetName(event.target[0].value);
      SetEmail(event.target[1].value);
      SetMessage(event.target[2].value);
  }


  return (
    <section className={styles.container}>
      <div className={styles.contactForm}>
        <div className={styles.top_btn}>
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage/>}/>
        <Button text="VIA CALL" icon={<IoIosCall/>}/>
        </div>
        <Button isemail={true} text="VIA EMAIL" icon={<IoMail />}/>

        <form onSubmit={onSubmitEvent}>

        <div className={styles.form_controller}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name"/>    
        </div>

        <div className={styles.form_controller}>
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email"/>    
        </div>

        <div className={styles.form_controller}>
            <label htmlFor="text">Message</label>
            <textarea name="text" cols="30" rows="10"></textarea>  
        </div>

        <Button text="SUBMIT BUTTON"/>
      </form>

      <div>
        {
          Name + "\n" + Email + "\n" + Message + "\n"
        }
      </div>
     

      </div>
      
      <div className={styles.contactImgDiv}>
            <img className={styles.contactImg} src="/Images/contact us.png" alt="ContactusImages" srcset="" />
      </div>

    </section>
  )
}

