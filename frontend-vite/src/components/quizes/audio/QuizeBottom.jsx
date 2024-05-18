import React, { useState, useEffect } from 'react';
import styles from './QuizeBottom.module.scss';
import axios from "axios";

const QuizeBottom = ({ numquestion, onClicked }) => {
  const [button1Color, setButton1Color] = useState(null);
  const [button2Color, setButton2Color] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const url = `https://misis52.clayenkitten.ru/api/quizzes/${numquestion}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const data = response.data;
        setAnswers(data.answers);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  const correct = answers.find((ans) => ans.is_correct);
  const text1 = answers[0]?.text;
  const text2 = answers[1]?.text;

  const handleButtonClick = (e) => {
    e.preventDefault();
    const userAns = e.target.value;
    setIsButtonClicked(true);

    if (userAns === correct?.text) {
      if (userAns === text1) {
        setButton1Color('#29B393');
        setButton2Color(null);
      } else {
        setButton1Color(null);
        setButton2Color('#29B393');
      }
    } else {
      if (userAns === text1) {
        setButton1Color('#FF536B');
        setButton2Color(null);
      } else {
        setButton1Color(null);
        setButton2Color('#FF536B');
      }
    }
  };

  useEffect(() => {
    if (isButtonClicked) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isButtonClicked]);

  const button1Style = {
    backgroundColor: button1Color,
    color: button1Color ? 'white' : 'black',
  };

  const button2Style = {
    backgroundColor: button2Color,
    color: button2Color ? 'white' : 'black',
  };

  return (
    <div>
      {isVisible && (
        <div className={styles.bottom}>
          <button onClick={(e) => { handleButtonClick(e)}} style={button1Style} value={text1}>
            {text1}
          </button>
          <button onClick={(e) => { handleButtonClick(e)}} style={button2Style} value={text2}>
            {text2}
          </button>
        </div>
      )}
      {!isVisible && <button className={styles.continue} onClick={onClicked}>Продолжить</button>}
    </div>
  );
};

export default QuizeBottom;
