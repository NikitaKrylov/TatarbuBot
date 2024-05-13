import styles from './DayWord.module.scss'

export default function DayWord (){
    let word = 'Белем'
    let transcription = '(бе-лем)'
    let translate = 'Знание, познание'

    return (
        <>
            <section>
                <h2>Слово дня</h2>
                <div>
                    <p>{word} <span>{transcription}</span></p>
                    <p>{translate}</p>
                </div>
            </section>
        </>
    )
}