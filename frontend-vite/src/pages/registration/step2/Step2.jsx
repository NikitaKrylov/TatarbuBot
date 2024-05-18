import React, { useEffect, useState } from 'react'
import StepsLine from '../../../components/global/stepsLine/StepsLine'
import Topic from '../../../components/registration/topic/Topic'
import styles from './Step2.module.scss'

import flagRu from '../../../assets/icons/normal/Flag_Russia.svg'
import flagBr from '../../../assets/icons/normal/flag_Brazil.svg'
import flagGe from '../../../assets/icons/normal/Flag_Georgia.svg'

import MainButton from '../../../components/global/Button/MainButton'



const Step2 = ({onClick}) => {
  const [selectedLang, setSelectedLang] = useState(null);

  const handleLanguageChange = (lang) => {
    setSelectedLang(lang);
  };


  const flags = [
    {
      lang: 'Русский',
      flag: flagRu,
      id: 'russian'
    },
    {
      lang: 'Brazil',
      flag: flagBr,
      id: 'brazil'
    },
    {
      lang: 'Georgia',
      flag: flagGe,
      id: 'georgia'
    },
  ];

  return (
    <>


      <div>
        <StepsLine count={4}/>
        <Topic 
          h1='Выбери язык, на котором ты разговариваешь' 
          description='Твое обучение продолжится на выбранном языке'
        />
        <ul className={styles.ul}>
          {flags.map((flag) => (
            <li key={flag.id}>
              <input 
                hidden 
                type="radio" 
                id={flag.id} 
                name="lang" 
                checked={selectedLang === flag.id}
                onChange={() => handleLanguageChange(flag.id)} 
              />
              <label 
                className={`${styles.lang} ${selectedLang === flag.id ? styles.selected : ''}`} 
                htmlFor={flag.id}
              >
                <img src={flag.flag} alt={`Flag of ${flag.lang}`} />
                <p>{flag.lang}</p>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={onClick}>
        <MainButton text={'Дальше'} color={'light_green'} />
      </button>
    </>
  );
};

export default Step2;
