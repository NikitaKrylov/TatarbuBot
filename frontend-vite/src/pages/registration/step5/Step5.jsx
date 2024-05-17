import React from 'react'
import MainButton from '../../../components/global/Button/MainButton'
import styles from './Step5.module.scss'

const Step5 = ({onClick}) => {
  return (
    <section className={styles.section}>
        <img className={styles.img} src="" alt="here is the Mascot" />
        <button onClick={onClick}>
          <MainButton text={'Начать обучение'} color={'green'}/>
        </button>
        
    </section>
  )
}

export default Step5;