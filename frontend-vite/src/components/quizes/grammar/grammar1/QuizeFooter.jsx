import React, { useState, useEffect } from 'react';
import styles from './QuizeFooter.module.scss';
import axios from "axios";

const QuizeFooter = ({ numquestion}) => {
  const [button1Color, setButton1Color] = useState(null);
  const [button2Color, setButton2Color] = useState(null);

  let url = `https://misis52.clayenkitten.ru/api/quizzes/${numquestion}`;

  const [answers, setAnswers] = useState([]);
  const [answers1, setAnswers1] = useState([]);
  const [answers2, setAnswers2] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(url);
        const data = response.data;
        setAnswers(data.answers);
        setAnswers1(data.answers[0]);
        setAnswers2(data.answers[1]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  let text1 = answers1?.text;
  let text2 = answers2?.text;

  let correct = answers?.filter((ans) => ans.is_correct === true)[0];



  let userAns = ''
  const handleButtonClick = (e) => {
     userAns = e.target.value;

    if (userAns === correct?.text) {
      setButton1Color('#29B393');
      setButton2Color(null);
    } else {
      setButton1Color(null);
      setButton2Color('#FF536B');
    }
  };

  let button1Style = {
    backgroundColor: button1Color,
    color: button1Color ? 'white' : 'black',
  };

  let button2Style = {
    backgroundColor: button2Color,
    color: button2Color ? 'white' : 'black',
  };


    return (
      <div className={styles.bottom}>
      <button onClick={(e) => {handleButtonClick(e)}} style={button1Style} value={text1}>
          {text1}
        </button>
    <button onClick={(e) => {handleButtonClick(e)}} style={button2Style} value={text2}>
          {text2}
        </button>
      </div>
    );
  
};

export default QuizeFooter;
