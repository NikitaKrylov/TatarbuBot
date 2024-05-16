import React from 'react'
import MainButton from '../../../components/global/Button/MainButton'
import styles from './Step1.module.scss'

const Step1 = () => {
  return (
    <>
        <section className={styles.section}>
             <img className={styles.img} src="" alt="here is a mascot" />
            <MainButton/>
        </section>
    </>
  )
}

export default Step1;