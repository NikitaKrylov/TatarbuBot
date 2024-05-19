import styles from './DayWord.module.scss'
import sound from '../../../assets/icons/sound.svg'
import audio from '../../../assets/audio_test/dayword.mp3'
import { useRef } from 'react';
const DayWord =()=>{
    let word = 'Белем'
    let transcription = '(бе-лем)'
    let translate = 'Знание, познание'
    const audioRef = useRef(null);

    const handlePlaySound = () => {
        if (audioRef.current) {
        audioRef.current.play();
        }
    };
    return (
        <>
            <section className={styles.section}>
                <h2 className={styles.h2}>Слово дня</h2>
                <div className={styles.div}>
                    <p className={styles.p}>
                        {word} 
                        <span>{transcription}</span>   
                        <button onClick={handlePlaySound}><img src={sound} alt="sound" /></button>
                        <audio ref={audioRef} src={audio} />
                    </p>
                    <p className={styles.p}>{translate}</p>
                </div>
            </section>
        </>
    )
};
export default DayWord;