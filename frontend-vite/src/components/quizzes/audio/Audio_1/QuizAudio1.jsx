import React, { useState, useEffect } from 'react';
import styles from './QuizAudio1.module.scss';
import StepsLine from '../../../../components/global/stepsLine/StepsLine';

const QuizAudio1 = ({ data, bottom, currentAnswer = '', isCorrect = false, num}) => {
  const [answer, setAnswer] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [txt, setText] = useState(null);
  const [name, setName] = useState(null);
  const [turus,setTurus] = useState(null);
  useEffect(() => {
    if (data) {
      setAnswer(data?.quizzes?.[num]?.answers[0]);
      setPhoto(`https://misis52.clayenkitten.ru/api${data?.quizzes[num]?.image}`);
      setText(data?.quizzes?.[num]?.text);
      setName(data?.quizzes?.[num]?.name)
      setTurus(data?.quizzes?.[num]?.explanation)
    }
  }, [num]);
  console.log(photo);
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
          <span>{turus}</span>
        </div>
      </section>
      {bottom}
    </main>
  );
};

export default QuizAudio1;
