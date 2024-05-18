import React, { useState } from 'react'
import StepsLine from '../../../components/global/stepsLine/StepsLine'
import Topic from '../../../components/registration/topic/Topic'
import styles from './Step3.module.scss'

import MainButton from '../../../components/global/Button/MainButton'
import tourism from '../../../assets/icons/tourism.svg'
import palette from '../../../assets/icons/Artist_Palette.svg'
import soccer from '../../../assets/icons/Soccer_Ball.svg'
import food from '../../../assets/icons/Pot_Of_Food.svg'

const Step3 = ({ onClick }) => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const handleInterestChange = (interest) => {
    setSelectedInterests(prevState =>
      prevState.includes(interest)
        ? prevState.filter(item => item !== interest)
        : [...prevState, interest]
    );
  };

  const interests = [
    { id: 'tourism', icon: tourism, label: 'Туризм' },
    { id: 'palette', icon: palette, label: 'Искусство' },
    { id: 'food', icon: food, label: 'Кулинария' },
    { id: 'soccer', icon: soccer, label: 'Спорт' }
  ];

  return (
    <>
      <section>
        <StepsLine count={4} />
        <Topic
          h1='Выбери темы, которые тебе интересны'
          description='Это сделает процесс обучения ещ еболее увлекательным'
        />
        <div className={styles.cards}>
          {interests.map(interest => (
            <div key={interest.id}>
              <input
                hidden
                type="checkbox"
                id={interest.id}
                name="interests"
                checked={selectedInterests.includes(interest.id)}
                onChange={() => handleInterestChange(interest.id)}
              />
              <label
                className={`${styles.card} ${selectedInterests.includes(interest.id) ? styles.selected : ''}`}
                htmlFor={interest.id}
              >
                <img src={interest.icon} alt={interest.label} />
                <p>{interest.label}</p>
              </label>
            </div>
          ))}
        </div>
      </section>
      <button onClick={onClick}>
        <MainButton text={'Дальше'} color={'light_green'} />
      </button>
    </>
  )
}

export default Step3;
