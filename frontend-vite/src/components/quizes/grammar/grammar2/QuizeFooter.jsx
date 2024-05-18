import React, { useState, useEffect } from 'react';
import styles from './QuizeFooter.module.scss';
import axios from "axios";

const QuizeFooter = ({ numquestion}) => {
  const [button1Color, setButton1Color] = useState(null);
  const [button2Color, setButton2Color] = useState(null);

  let url = `https://misis52.clayenkitten.ru/api/quizzes/${numquestion}`;

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
        setButton2Color(null);
  }

  let button1Style = {
    backgroundColor: button1Color,
    color: button1Color ? 'white' : 'black',
  };

    return (
      <div className={styles.bottom}>
      <button onClick={(e) => {handleButtonClick(e)}} style={button1Style}>
          {text1}
        </button>
      </div>
    );
  
};

export default QuizeFooter;
