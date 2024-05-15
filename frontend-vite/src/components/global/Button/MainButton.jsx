import styles from './MainButton.module.scss'

export default function MainButton ({text}){
    return(
        <button className={styles.button}>
            {text}
        </button>
    )
}