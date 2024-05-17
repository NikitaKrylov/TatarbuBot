import React from 'react'
import MainButton from '../../../components/global/Button/MainButton'
import styles from './Step7.module.scss'

const Step7 = ({onClick}) => {
  return (
    <section className={styles.section}>
        <img className={styles.img} src="" alt="here is the Mascot" />
        <button onClick={onClick}>
          <MainButton text={'Начать обучение'} color={'green'}/>
        </button>
    </section>
  )
}

export default Step7;