import React from 'react'
import StepsLine from '../../../components/global/stepsLine/StepsLine'
import Topic from '../../../components/registration/topic/Topic'
import styles from './Step2.module.scss'

import flagRu from '../../../assets/icons/normal/Flag_Russia.svg'
import flagBr from '../../../assets/icons/normal/flag_Brazil.svg'
import flagGe from '../../../assets/icons/normal/Flag_Georgia.svg'

const Step2 = () => {

    let flags = [
        {
            lang: 'Русский',
            flag: flagRu
        },
        {
            lang: 'Brazil',
            flag: flagBr
        },
        {
            lang: 'Georgia',
            flag: flagGe
        },
    ]
  return (
    <>
        <StepsLine/>
        <Topic/>
        <ul className={styles.ul}>
            <li>
                <input type="radio" id='russian' />
                <label className={styles.lang} htmlFor="russian">
                    <img src={flagRu}></img>
                    <p>Русский</p>
                </label>
            </li>
            <li>
                <input type="radio" id='brazil' />
                <label className={styles.lang} htmlFor="brazil">
                    <img src={flagBr} alt='photo'></img>
                    <p>Brazil</p>
                </label>
            </li>
            <li>
                <input type="radio" id='georgia' />
                <label className={styles.lang} htmlFor="georgia">
                    <img src={flagGe}></img>
                    <p>Georgia</p>
                </label>
            </li>
        </ul>
    </>
  )
}

export default Step2