import React, { useState, useEffect } from 'react';
import styles from './QuizeAudio2.module.scss';
import axios from 'axios';
import StepsLine from '../../../../components/global/stepsLine/StepsLine';
import QuizeBottom from '../QuizeBottom';

const QuizeAudio2 = () => {
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

  function handleClick(value) {
    setInputValue(value);
  }

  return (
    <>
      <main className={styles.mainBlock}>
        <section className={styles.section}>
          <StepsLine count={4} />
          <h5>Какое слово пропущено?</h5>
          <figure>
            <img onClick={() => alert('click')} src={url} alt="рисунок белема" />
            <figcaption>Нажмите, чтобы прослушать</figcaption>
          </figure>
          <div className={styles.questionTatar}>
            <input type="text" value={inputValue} />
            <label htmlFor="">Ничек син дус?</label>
          </div>
        </section>
        <QuizeBottom onClick={handleClick} numquestion={2} />
      </main>
    </>
  );
};

export default QuizeAudio2;
