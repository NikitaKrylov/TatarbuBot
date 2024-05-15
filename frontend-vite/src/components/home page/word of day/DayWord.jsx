import styles from './DayWord.module.scss'

export default function DayWord (){
    let word = 'Белем'
    let transcription = '(бе-лем)'
    let translate = 'Знание, познание'

    return (
        <>
            <section className={styles.section}>
                <h2 className={styles.h2}>Слово дня</h2>
                <div className={styles.div}>
                    <p className={styles.p}>{word} <span>{transcription}</span></p>
                    <p className={styles.p}>{translate}</p>
                </div>
            </section>
        </>
    )
}