import React, { useState, useEffect, useRef } from 'react';
import cls from './QuizSpeaking.module.scss';
import StepsLine from '../../../components/global/stepsLine/StepsLine.jsx';
import belem from '../../../assets/images_course/1lesson.png';
import speaker from '../../../assets/icons/sound.svg';
import AudioRecorder from '../../global/AudioRecorder/AudioRecorder';

const QuizSpeaking = ({ data, num, onUploadSuccess }) => {
  const [photo, setPhoto] = useState(null);
  const [txt, setText] = useState(null);
  const [name, setName] = useState(null);
  const [audsrc, setAud] = useState(null);
  const [turus, setTurus] = useState(null);
  const [qz_id, setQzid] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (data) {
      setPhoto(`https://misis52.clayenkitten.ru/api${data.quizzes[num].image}`);
      setText(data?.quizzes?.[num]?.text);
      setName(data?.quizzes?.[num]?.name);
      setTurus(data?.quizzes?.[num]?.explanation);
      setQzid(data?.quizzes?.[num]?.id);
      setAud(`https://misis52.clayenkitten.ru/api${data.quizzes[num].audio}`);
    }
  }, [data, num]);

  const handlePlaySound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <main className={cls.mainBlock}>
      <section className={cls.section}>
        <StepsLine count={9} />
        <h5>{name}</h5>
        <figure>
          <img src={photo} alt="рисунок Белема" />
          <figcaption>Нажмите, чтобы прослушать</figcaption>
        </figure>
      </section>
      <div className={cls.recblock}>
        <button className={cls.btn} onClick={handlePlaySound}>
          <div className={cls.btn_icon}>
            <img src={speaker} alt="speaker" />
          </div>{turus}
        </button>
        <audio ref={audioRef} src={audsrc} />
        <AudioRecorder QZID={qz_id} onUploadSuccess={onUploadSuccess} />
      </div>
    </main>
  );
};

export default QuizSpeaking;
