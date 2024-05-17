import React from 'react'
import StepsLine from '../../../components/global/stepsLine/StepsLine'
import Topic from '../../../components/registration/topic/Topic'
import styles from './Step2.module.scss'

import flagRu from '../../../assets/icons/normal/Flag_Russia.svg'
import flagBr from '../../../assets/icons/normal/flag_Brazil.svg'
import flagGe from '../../../assets/icons/normal/Flag_Georgia.svg'

import MainButton from '../../../components/global/Button/MainButton'


const Step2 = ({onClick}) => {

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

        <div>
            <StepsLine/>
            <Topic 
                h1 ='Выбери язык, на котором ты разговариваешь' 
                description ='Твое обучение проодолжится на выбранном языке'
            />
            <ul className={styles.ul}>
                <li>
                    <input hidden type="radio" id='russian' name='lang'/>
                    <label className={styles.lang} htmlFor="russian">
                        <img src={flagRu}></img>
                        <p>Русский</p>
                    </label>
                </li>
                <li>
                    <input hidden type="radio" id='brazil' name='lang'/>
                    <label className={styles.lang} htmlFor="brazil">
                        <img src={flagBr} alt='photo'></img>
                        <p>Brazil</p>
                    </label>
                </li>
                <li>
                    <input hidden type="radio" id='georgia' name='lang'/>
                    <label className={styles.lang} htmlFor="georgia">
                        <img src={flagGe}></img>
                        <p>Georgia</p>
                    </label>
                </li>
            </ul>
        </div>
        <button onClick={onClick}><MainButton text={'Дальше'} color={'light_green'}/></button>
        

    </>
  )
}

export default Step2