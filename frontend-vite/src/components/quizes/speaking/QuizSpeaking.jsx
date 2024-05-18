import React from 'react'
import AudioRecorder from '../../global/AudioRecorder/AudioRecorder'
import cls from './QuizSpeaking.module.scss'
import StepsLine from '../../../components/global/stepsLine/StepsLine.jsx'
import belem from '../../../assets/images_course/1lesson.png'
import speaker from '../../../assets/icons/sound.svg'
import audio_test from '../../../assets/audio_test/audio.ogg'
import { useRef } from 'react'
const QuizSpeaking=()=>{
  let word ="Рәхим итегез!";
  let translate = "Добро пожаловать!"
  const audioRef = useRef(null);

  const handlePlaySound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  
  return (
    <main className={cls.mainBlock}>
        <section className={cls.section}>
          <StepsLine count={5} />
          <h5>Слушай и повторяй</h5>
          <figure>
            <img onClick={() => alert('click')} src={belem} alt="рисунок Белема" />
            <figcaption>Нажмите, чтобы прослушать</figcaption>
          </figure>
        </section>
        <div className={cls.recblock}>
          <button className={cls.btn} onClick={handlePlaySound}> 
            <div className={cls.btn_icon} >
              <img src={speaker} alt='speaker'/>
            </div>
            <span>{word}</span>
          </button>
          <span className={cls.trans}>{translate}</span>
          <audio ref={audioRef} src={audio_test} />
          <AudioRecorder/>
        </div>
        
      </main>
  )
};
export default QuizSpeaking;
