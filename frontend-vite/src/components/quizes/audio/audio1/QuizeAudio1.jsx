import React, { useEffect, useState } from 'react';
import styles from './QuizeAudio1.module.scss';
import axios from "axios";
import StepsLine from '../../../../components/global/stepsLine/StepsLine';
import QuizeBottom from '../QuizeBottom';

const QuizeAudio1 = ({onClick}) => {
  let url = `https://misis52.clayenkitten.ru/api/quizzes/2  `;

  const [question, setQuestion] = useState('');

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

  function handleElement(e){
    console.log(e.target);
  }

  return (
    <>
      <main className={styles.mainBlock}>
        <section className={styles.section}>
          <StepsLine count={9} />
          <h5>{question}</h5>
          <figure>
            <img onClick={() => alert('click')} src={src} alt="рисунок Белема" />
            <figcaption>Нажмите, чтобы прослушать</figcaption>
          </figure>
        </section>
        
        <QuizeBottom onClicked={onClick} numquestion={1} />

      </main>
    </>
  );
};

export default QuizeAudio1;
