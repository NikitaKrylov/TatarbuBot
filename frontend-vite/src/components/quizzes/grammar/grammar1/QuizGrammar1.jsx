import React, { useState, useEffect } from 'react';
import styles from './QuizGrammar1.module.scss'
import axios from 'axios';
import StepsLine from '../../../../components/global/stepsLine/StepsLine';
import QuizFooter from '../../grammar/grammar1/QuizFooter';

const QuizGrammar1 = ({onClick}) => {
  let url = `https://misis52.clayenkitten.ru/api/quizzes/2`;

  const [question, setQuestion] = useState('');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(url);
        const data = response.data;
        setQuestion(data.name);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  function handleChange(e){
    setInputValue(e.target.value)
  }


  return (
    <>
      <main className={styles.mainBlock}>
        <section className={styles.section}>
          <StepsLine count={9} />
          <h5>Впиши слово, которое пропущено</h5>
          <img src={url} alt="рисунок белема" />
          <div className={styles.questionTatar}>
            <input type="text" value={inputValue} onChange={handleChange}/>
            <label htmlFor="">{question}</label>
          </div>
        </section>
          <QuizFooter onClicked={onClick} numquestion={1} />
      </main>
    </>
  );
};

export default QuizGrammar1;
