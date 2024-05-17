import React from 'react'
import styles from './QuizeAudio2.module.scss'
import StepsLine from '../../../../components/global/stepsLine/StepsLine'
import QuizeBottom from '../QuizeBottom'


const QuizeAudio2 = () => {
  let question = 'Что говорит Белем?'
  let url = '#'

  return (
    <>
      <main className={styles.mainBlock}>
        <section className={styles.section}>
            <StepsLine/>
            <h5>{question}</h5>
            <figure>
              <img onClick={() => alert('click')} src={url} alt="рисунок Белема" />
              <figcaption>Нажмите, чтобы прослушать</figcaption>
            </figure>
        </section>
        <QuizeBottom/>
      </main>
    </>
  )
}

export default QuizeAudio2