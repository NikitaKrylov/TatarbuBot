import React from 'react'
import MainButton from '../../../components/global/Button/MainButton'
import styles from './Step5.module.scss'

const Step5 = () => {
  return (
    <section className={styles.section}>
        <img className={styles.img} src="" alt="here is the Mascot" />
        <MainButton text={'Начать обучение'} color={'green'}/>
    </section>
  )
}

export default Step5;