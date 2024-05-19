import React, { useState, useEffect, useRef} from 'react';
import styles from './QuizAudio2.module.scss';
import StepsLine from '../../../../components/global/stepsLine/StepsLine';

const QuizAudio2 = ({ data, bottom, currentAnswer = '', isCorrect = false, num }) => {
  const [photo, setPhoto] = useState(null);
  const [txt, setText] = useState(null);
  const [name, setName] = useState(null);
  const [audsrc, setAud] = useState(null);
  const [turus,setTurus] = useState(null);
  useEffect(() => {
    if (data) {
      setPhoto(`https://misis52.clayenkitten.ru/api${data.quizzes[num].image}`);
      setText(data?.quizzes?.[num]?.text);
      setName(data?.quizzes?.[num]?.name);
      setTurus(data?.quizzes?.[num]?.explanation)
      setAud(`https://misis52.clayenkitten.ru/api${data.quizzes[num].audio}`)
    }
  }, [num]);
  const audioRef = useRef(null);

  const handlePlaySound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <main className={styles.mainBlock}>
      <section className={styles.section}>
        <StepsLine count={9} />
        <h5>{name}</h5>
        <div className={styles.figure} onClick={handlePlaySound}>
          <img src={photo} alt="рисунок белема"width={"160px"} height={"184px"} />
          <figcaption>Нажмите чтобы прослушать</figcaption>
          <audio ref={audioRef} src={audsrc} />
        </div>
        <div className={styles.questionTatar}>
          <div className={styles.para}>
            <input type="text" value={currentAnswer} readOnly />
            <label htmlFor="">{txt}</label>
          </div>
          <span className={styles.translate}>{turus}</span>
        </div>
        
      </section>
      {bottom}
    </main>
  );
};

export default QuizAudio2;
