import React from 'react'
import MainButton from '../../../components/global/Button/MainButton'
import styles from './Step1.module.scss'

const Step1 = ({onClick}) => {
  return (
    <>
        <section className={styles.section}>
             <img className={styles.img} src="" alt="here is a mascot" />
            <button onClick={onClick}>
              <MainButton text={'Начать обучение'} color={'green'}/>
            </button>
            
        </section>
    </>
  )
}

export default Step1;