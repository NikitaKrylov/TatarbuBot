import styles from './Topic.module.scss'

const Topic = () => {
    let h1 = 'Выбери язык, на котором ты разговариваешь'
    let description = 'Твое обучение проодолжится на выбранном языке'
    return (
        <div className={styles.div}>
            <h1 className={styles.h1}>{h1}</h1>
            <p className={styles.p}>{description}</p>
        </div>
    )
}

export default Topic;