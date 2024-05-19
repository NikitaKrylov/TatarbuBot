import React, { useState, useEffect } from 'react';
import styles from './QuizBottom2.module.scss';

const QuizBottom2 = ({ num, data, onClick }) => {
  const [buttonColor1, setButtonColor1] = useState(null);
  const [buttonColor2, setButtonColor2] = useState(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleClick = (index) => {
    const isCorrect = data.quizzes[num].answers[index].is_correct;
    setIsButtonClicked(true);

    if (index === 0) {
      setButtonColor1(isCorrect ? '#29B393' : '#FF0000');
    } else {
      setButtonColor2(isCorrect ? '#29B393' : '#FF0000');
    }

    onClick(data.quizzes[num].answers[index].text, isCorrect);
  };

  useEffect(() => {
    if (isButtonClicked) {
      const timer = setTimeout(() => {
        onClick(null, false);
      }, 5000); // Automatically proceed to the next quiz after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [isButtonClicked, onClick]);

  // Reset button colors and clicked state when num or data changes
  useEffect(() => {
    setButtonColor1(null);
    setButtonColor2(null);
    setIsButtonClicked(false);
  }, [num, data]);

  return (
    <div className={styles.bottom}>
      <button onClick={() => handleClick(0)} style={{ backgroundColor: buttonColor1 }}>
        {data.quizzes[num].answers[0].text}
      </button>
      <button onClick={() => handleClick(1)} style={{ backgroundColor: buttonColor2 }}>
        {data.quizzes[num].answers[1].text}
      </button>
    </div>
  );
};

export default QuizBottom2;
