import React, { useState } from 'react';
import StepsLine from '../../../components/global/stepsLine/StepsLine';
import Topic from '../../../components/registration/topic/Topic';
import styles from './Step6.module.scss';

import MainButton from '../../../components/global/Button/MainButton';
import easy from '../../../assets/icons/easy.svg';
import middle from '../../../assets/icons/middle.svg';
import hard from '../../../assets/icons/hard.svg';

const Step6 = ({ onClick }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const times = [
    { id: 'easy', img: easy, heading: '5-10 минут в день', text: 'У меня очень мало свободного времени, но я хочу попробовать' },
    { id: 'middle', img: middle, heading: '15-20 минут в день', text: 'У меня не так много свободного времени, но я настроен уверено' },
    { id: 'hard', img: hard, heading: '25-30 минут в день', text: 'Я чувствую, что в душе я татарин, давайте уже скорее начнем' }
  ];

  return (
    <>
      <section>
        <StepsLine count={4} />
        <Topic
          h1='Сколько времени в день ты готов уделять на изучение?'
          description='Это поможет нам правильно рассчитать нагрузку'
        />
        <div className={styles.cards}>
          {times.map(time => (
            <div key={time.id}>
              <input
                hidden
                type="radio"
                id={time.id}
                name="time"
                checked={selectedTime === time.id}
                onChange={() => handleTimeChange(time.id)}
              />
              <label
                className={`${styles.card} ${selectedTime === time.id ? styles.selected : ''}`}
                htmlFor={time.id}
              >
                <img src={time.img} alt={`Icon for ${time.heading}`} />
                <div>
                  <h3>{time.heading}</h3>
                  <p>{time.text}</p>
                </div>
              </label>
            </div>
          ))}
        </div>
      </section>
      <button onClick={onClick}>
        <MainButton text={'Начать обучение'} color={'light_green'} />
      </button>
    </>
  );
}

export default Step6;
