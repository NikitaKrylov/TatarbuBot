import React, { useEffect, useState } from 'react';
import styles from './QuizeGrammar2.module.scss';
import axios from "axios";
import StepsLine from '../../../global/stepsLine/StepsLine';
import QuizeFooter from '../grammar1/QuizeFooter';

const QuizeGrammar2 = () => {
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

  return (
    <>
      <main className={styles.mainBlock}>
        <section className={styles.section}>
          <StepsLine count={4} />
          <h5>Что ты видишь на картинке?</h5>
          <img onClick={() => alert('click')} src={src} alt="рисунок Белема" />
        </section>
        <QuizeFooter numquestion={2} />
      </main>
    </>
  );
};

export default QuizeGrammar2;
