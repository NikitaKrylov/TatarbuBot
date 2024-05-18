import React from 'react'
import AudioRecorder from '../../global/AudioRecorder/AudioRecorder'
import cls from './QuizSpeaking.module.scss'
import StepsLine from '../../../components/global/stepsLine/StepsLine.jsx'
import belem from '../../../assets/images_course/1lesson.png'
const QuizSpeaking=()=>{
  return (
    <main className={cls.mainBlock}>
        <section className={cls.section}>
          <StepsLine count={9} />
          <h5>Слушай и повторяй</h5>
          <figure>
            <img onClick={() => alert('click')} src={belem} alt="рисунок Белема" />
            <figcaption>Нажмите, чтобы прослушать</figcaption>
          </figure>
        </section>
        <AudioRecorder/>
      </main>
  )
};
export default QuizSpeaking;
