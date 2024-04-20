import styles from "./Button.module.css";


export const Button = (props) => {
    const {isemail,icon,text,...rest} = props;
  return (
    <button {...rest} className={isemail ? styles.email_btn : styles.primary_btn}>
        {icon} 
        {text}
    </button>
  )
}
