import React from 'react'
import MainButton from '../../../components/global/Button/MainButton'
import styles from './Step7.module.scss'
import image from '../../../assets/images_course/rega3.jpg'

const Step7 = ({onClick}) => {
  return (
    <section className={styles.section}>
      <h2><span>Ура!</span> Теперь ты можешь приступить к изучения языка</h2>
        <img className={styles.img} src={image} alt="here is the Mascot" />
        <button onClick={onClick}>
          <MainButton text={'Начать обучение'} color={'green'}/>
        </button>
    </section>
  )
}

export default Step7;