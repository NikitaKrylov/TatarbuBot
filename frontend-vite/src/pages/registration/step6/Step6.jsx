import React from 'react'
import StepsLine from '../../../components/global/stepsLine/StepsLine'
import Topic from '../../../components/registration/topic/Topic'
import styles from './Step6.module.scss'

import MainButton from '../../../components/global/Button/MainButton'
import easy from '../../../assets/icons/easy.svg'
import middle from '../../../assets/icons/middle.svg'
import hard from '../../../assets/icons/hard.svg'

const Step6 = () => {
  return (
    <>
        <section>
            <StepsLine/>
            <Topic
                h1='Сколько времени в день ты готов уделять на изучение?'
                description='Это поможет нам правильно рассчитать нагрузку'
            />
            <div className={styles.cards}>
                <input hidden type="radio" id='easy' name='time'/>
                <label className={styles.card} htmlFor="easy">
                  <img src={easy} alt="тут img" />
                  <div>
                    <h3>5-10 минут в день</h3>
                    <p>У меня очень мало свободного времени, но я хочу попробовать</p>
                  </div>
                </label>

                <input hidden type="radio" id='middle' name='time'/>
                <label className={styles.card} htmlFor="middle">
                  <img src={middle} alt="тут img" />
                  <div>
                    <h3>15-20 минут в день</h3>
                    <p>У меня не так много свободного времени, но я настроен уверено</p>
                  </div>
                </label>

                <input hidden type="radio" id='hard' name='time'/>
                <label className={styles.card} htmlFor="hard">
                  <img src={hard} alt="тут img" />
                  <div>
                    <h3>25-30 минут в день</h3>
                    <p>Я чувствую, что в душе я татарин, давайте уже скорее начнем</p>
                  </div>
                </label>
            </div>
        </section>
        
        <MainButton text={'Начать обучение'} color={'light_green'}/>
    </>
  )
}

export default Step6