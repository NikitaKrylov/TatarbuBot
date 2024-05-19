import React from 'react'
import MainButton from '../../../components/global/Button/MainButton'
import styles from './Step5.module.scss'
import image from '../../../assets/images_course/rega2.jpg'

const Step5 = ({onClick}) => {
  return (
    <section className={styles.section}>
        <h2>Осталось совсем <span>несного</span></h2>
        <img className={styles.img} src={image} alt="here is the Mascot" />
        <button onClick={onClick}>
          <MainButton text={'Начать обучение'} color={'green'}/>
        </button>
        
    </section>
  )
}

export default Step5;