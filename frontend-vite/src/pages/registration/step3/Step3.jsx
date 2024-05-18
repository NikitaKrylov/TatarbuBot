import React from 'react'
import StepsLine from '../../../components/global/stepsLine/StepsLine'
import Topic from '../../../components/registration/topic/Topic'
import styles from './Step3.module.scss'

import MainButton from '../../../components/global/Button/MainButton'
import tourism from '../../../assets/icons/tourism.svg'
import palette from '../../../assets/icons/Artist_Palette.svg'
import soccer from '../../../assets/icons/Soccer_Ball.svg'
import food from '../../../assets/icons/Pot_Of_Food.svg'

const Step3 = ({onClick}) => {
  return (
    <>
        <section>
            <StepsLine count={4}/>
            <Topic
                h1='Выбери темы, которые тебе интересны'
                description='Это сделает процесс обучения ещ еболее увлекательным'
            />
            <div className={styles.cards}>
                <input hidden type="checkbox" id='tourism' name='interests'/>
                <label className={styles.card} htmlFor='tourism'>
                  <img src={tourism} alt="" />
                  <p>Туризм</p>
                </label>

                <input hidden type="checkbox" id='palette' name='interests'/>
                <label className={styles.card} htmlFor='palette'>
                  <img src={palette} alt="" />
                  <p>Искусство</p>
                </label>
                
                <input hidden type="checkbox" id='food' name='interests'/>
                <label className={styles.card} htmlFor='food'>
                  <img src={food} alt="" />
                  <p>Кулинария</p>
                </label>
                
                <input hidden type="checkbox" id='soccer' name='interests'/>
                <label className={styles.card} htmlFor='soccer'>
                  <img src={soccer} alt="" />
                  <p>Спорт</p>
                </label>
            </div>
        </section>
        <button onClick={onClick}>
          <MainButton text={'Дальше'} color={'light_green'}/>
        </button>
    </>
  )
}

export default Step3;