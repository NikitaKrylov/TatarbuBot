import React, { useEffect, useState } from 'react';
import styles from './QuizeAudio21.module.scss';
import axios from "axios";
import StepsLine from '../../../global/stepsLine/StepsLine';
import QuizeBottom from '../QuizeBottom';

const QuizeAudio21 = ({onClick}) => {
  let url = `https://misis52.clayenkitten.ru/api/quizzes/2  `;

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

  let src = '#';

  function handleButtonClick(e){
    e.preventDefault()
    setInputValue(e.target.value)
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
          <div className={styles.questionTatar}>
            <input type="text" value={inputValue} />
            <label htmlFor="">Ничек син дус?</label>
          </div>
        </section>
        
        <QuizeBottom onClick={handleButtonClick}  numquestion={1} />
        {/* onClicked={onClick} */}
      </main>
    </>
  );
};

export default QuizeAudio21;
