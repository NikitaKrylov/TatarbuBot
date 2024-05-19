import React from 'react'
import MainButton from '../../../components/global/Button/MainButton'
import styles from './Step1.module.scss'
import image from '../../../assets/images_course/rega1.jpg'

const Step1 = ({onClick}) => {
  return (
    <>
        <section className={styles.section}>
            <h2>Привет, <br /> меня зовут <span>Белем</span> Я буду помогать тебе изучать <span>Татарский язык!</span></h2>
            <img className={styles.img} src={image} alt="here is a mascot" />
            <button onClick={onClick}>
              <MainButton text={'Начать обучение'} color={'green'}/>
            </button>
            
        </section>
    </>
  )
}

export default Step1;