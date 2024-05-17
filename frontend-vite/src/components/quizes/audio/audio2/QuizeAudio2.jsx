import React, { useState } from 'react'
import styles from './QuizeAudio2.module.scss'
import StepsLine from '../../../../components/global/stepsLine/StepsLine'
import QuizeBottom from '../QuizeBottom'


const QuizeAudio2 = () => {
  let question = 'Какое слово пропущено?'
  let url = '#'
  
  const [userChoice, setUserChoice] = useState('')


  return (
    <>
      <main className={styles.mainBlock}>
        <section className={styles.section}>
            <StepsLine/>
            <h5>{question}</h5>
            <figure>
              <img onClick={() => alert('click')} src={url} alt="рисунок белема" />
              <figcaption>Нажмите, чтобы прослушать</figcaption>
            </figure>
            <div className={styles.question}>
              <input disabled type="text" value={userChoice} />
              <label htmlFor="">Ничек син дус?</label>
            </div>
        </section>
        <QuizeBottom/>
      </main>
    </>
  )
}

export default QuizeAudio2