import React from 'react'
import styles from './QuizeAudio1.module.scss'
import StepsLine from '../../../../components/global/stepsLine/StepsLine'
import QuizeBottom from '../QuizeBottom'


const QuizeAudio1 = () => {
  let question = 'Что говорит Белем?'
  let url = '#'

  return (
    <>
      <main className={styles.mainBlock}>
        <section className={styles.section}>
            <StepsLine count={5}/>
            <h5>{question}</h5>
            <figure>
              <img onClick={() => alert('click')} src={url} alt="рисунок Белема" />
              <figcaption>Нажмите, чтобы прослушать</figcaption>
            </figure>
        </section>
        <QuizeBottom numquestion={1}/>
      </main>
    </>
  )
}

export default QuizeAudio1