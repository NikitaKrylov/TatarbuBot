import React, { useState, useEffect } from 'react';
import styles from './QuizeFooter.module.scss';
import axios from "axios";

const QuizeFooter = ({ numquestion, onClick}) => {
  const [button1Color, setButton1Color] = useState(null);

  let url = `https://misis52.clayenkitten.ru/api/quizzes/${numquestion}`;
  let text1 = 'Сәлам'

  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(url);
        const data = response.data;
        setAnswer(data.answer);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  let userAns = ''
  const handleButtonClick = (e) => {
        userAns = e.target.value;
        setButton1Color('#29B393');
  }

  let button1Style = {
    backgroundColor: button1Color,
    color: button1Color ? 'white' : 'black',
  };

    return (
      <div className={styles.bottom}>
        <button onClick={(e) => {handleButtonClick(e); onClick(text1)}} style={button1Style}>
            {text1}
          </button>
      </div>
    );
  
};

export default QuizeFooter;
