import React, { useEffect, useState } from 'react';
import styles from './QuizeGrammar2.module.scss';
import axios from "axios";
import StepsLine from '../../../global/stepsLine/StepsLine';
import QuizeFooter from './QuizeFooter';

const QuizeGrammar2 = ({onClick}) => {
  let url = `https://misis52.clayenkitten.ru/api/quizzes/2`;

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

  let src = '#';
  const [inputValue, setInputValue] = useState('')

  function handleClick(value) {
    setInputValue(value);
  }

  return (
    <>
      <main className={styles.mainBlock}>
        <section className={styles.section}>
          <StepsLine count={9} />
          <h5>Что ты видишь на картинке?</h5>
          <img src={src} alt="рисунок Белема" />
          <input type="text" value={inputValue} />
        </section>
        <div onClick={onClick}>
          <QuizeFooter onClick={handleClick} numquestion={2} />
        </div>
      </main>
    </>
  );
};

export default QuizeGrammar2;
