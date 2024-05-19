import React, { useState, useEffect, useRef} from 'react';

import styles from './QuizBottom1.module.scss';

const QuizBottom1 = ({ onClick, answer, data,num }) => {
  const [isClicked, setIsClicked] = useState(false);
  let aud = `https://misis52.clayenkitten.ru/api${data.quizzes?.[num]?.audio}`
  const handleButtonClick = () => {
    setIsClicked(true);
    onClick(answer, true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  useEffect(()=>{
    setIsClicked(false)
  },[answer])
  const audioRef = useRef(null);
  const button1Style = {
    backgroundColor: isClicked ? '#29B393' : '#FFFFFF',
    color: isClicked ? 'white' : 'black',
  };

  return (
    <div>
      <div className={styles.bottom}>
        <button onClick={handleButtonClick} style={button1Style}>
          {answer}
        </button>
        <audio ref={audioRef} src={aud} />
      </div>
    </div>
  )
};

export default QuizBottom1;