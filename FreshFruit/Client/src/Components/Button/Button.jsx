import styles from "./Button.module.css";

export const Button = (props) => {
    const{text} = props;
  return (
    <div>
        <button className={styles.buttonElement}>{text}</button>
    </div>
  )
}
