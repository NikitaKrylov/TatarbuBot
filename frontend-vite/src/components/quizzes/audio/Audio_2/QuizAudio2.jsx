import React, { useState, useEffect } from 'react';
import styles from './QuizAudio2.module.scss';
import StepsLine from '../../../../components/global/stepsLine/StepsLine';

const QuizAudio2 = ({ data, bottom, currentAnswer = '', isCorrect = false, num }) => {
  const [photo, setPhoto] = useState(null);
  const [txt, setText] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    if (data) {
      setPhoto(`https://misis52.clayenkitten.ru/api${data.quizzes[num].image}`);
      setText(data?.quizzes?.[num]?.text);
      setName(data?.quizzes?.[num]?.name);
    }
  }, [num]);

  return (
    <main className={styles.mainBlock}>
      <section className={styles.section}>
        <StepsLine count={9} />
        <h5>{name}</h5>
        <div className={styles.figure}>
          <img src={photo} alt="рисунок белема" />
        </div>
        <div className={styles.questionTatar}>
          <input type="text" value={currentAnswer} readOnly />
          <label htmlFor="">{txt}</label>
        </div>
      </section>
      {bottom}
    </main>
  );
};

export default QuizAudio2;
