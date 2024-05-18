import React, { useState } from 'react'
import StepsLine from '../../../components/global/stepsLine/StepsLine'
import Topic from '../../../components/registration/topic/Topic'
import styles from './Step4.module.scss'

import MainButton from '../../../components/global/Button/MainButton'

const Step4 = ({ onClick }) => {
  const [selectedReason, setSelectedReason] = useState(null);

  const handleReasonChange = (reason) => {
    setSelectedReason(reason);
  };

  const reasons = [
    { id: 'first', label: 'Хочу научиться общаться на татарском языке' },
    { id: 'second', label: 'Хочу выучить язык для работы' },
    { id: 'third', label: 'Культурное обогащение' }
  ];

  return (
    <>
      <section>
        <StepsLine count={4} />
        <Topic
          h1='Расскажи, почему ты хочешь изучать татарский язык?'
          description='Так, мы сможем подобрать уроки, максимально соответствующие твоей цели'
        />
        <div className={styles.cards}>
          {reasons.map(reason => (
            <div key={reason.id} className={styles.card}>
              <input
                hidden
                type="radio"
                id={reason.id}
                name="reasons"
                checked={selectedReason === reason.id}
                onChange={() => handleReasonChange(reason.id)}
              />
              <label
                className={`${styles.card} ${selectedReason === reason.id ? styles.selected : ''}`}
                htmlFor={reason.id}
              >
                <p>{reason.label}</p>
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

export default Step4;
