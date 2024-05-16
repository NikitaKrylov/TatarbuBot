import styles from './Topic.module.scss'

const Topic = ({h1, description}) => {
    return (
        <div className={styles.div}>
            <h1 className={styles.h1}>{h1}</h1>
            <p className={styles.p}>{description}</p>
        </div>
    )
}

export default Topic;