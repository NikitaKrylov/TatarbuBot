import React from 'react'
import StepsLine from '../../../components/global/stepsLine/StepsLine'
import Topic from '../../../components/registration/topic/Topic'
import styles from './Step4.module.scss'

import MainButton from '../../../components/global/Button/MainButton'

const Step4 = ({onClick}) => {
  return (
    <>
        <section>
            <StepsLine/>
            <Topic
                h1='Расскажи, почему ты хочешь изучать татарский язык?'
                description='Так, мы сможем подобрать уроки, максимально соответствующие твоей цели'
            />
            <div className={styles.cards}>
                <input hidden type="radio" id='first' name='reasons'/>
                <label className={styles.card} htmlFor="first">
                  <p>Туризм</p>
                </label>

                <input hidden type="radio" id='second' name='reasons'/>
                <label className={styles.card} htmlFor="second">
                  <p>Искусство</p>
                </label>
                
                <input hidden type="radio" id='third' name='reasons'/>
                <label className={styles.card} htmlFor="third">
                  <p>Кулинария</p>
                </label>
            </div>
        </section>
        <button onClick={onClick}>
          <MainButton text={'Дальше'} color={'light_green'}/>
        </button>
    </>
  )
}

export default Step4