import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Lesson.module.scss';

import axios from 'axios';

import QuizAudio1 from '../../components/quizzes/audio/Audio_1/QuizAudio1';
import QuizAudio2 from '../../components/quizzes/audio/Audio_2/QuizAudio2';
import QuizSpeaking from '../../components/quizzes/speaking/QuizSpeaking';
import QuizBottom1 from '../../components/quizzes/audio/QuizBottom1';
import QuizBottom2 from '../../components/quizzes/audio/QuizBottom2';
import Part_1 from './StoryParts/Part_1';
import Part_2 from './StoryParts/Part_2';
import Part_3 from './StoryParts/Part_3';
import Part_4 from './StoryParts/Part_4';
const URL = `https://misis52.clayenkitten.ru/api/lessons/all`;

const Lesson = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        setData(response.data[0]);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchData();
  }, [URL]);
  const handleUploadSuccess = (responseData) => {
    if (responseData.is_correct) {
      setTimeout(() => {
        setStep((prev) => prev + 1);
      }, 3000);
    }
  };
  const onBottomComponentClick = (answer, isCorrectAnswer) => {
    setAnswer(answer);
    
    if (isCorrectAnswer) {
      setIsCorrect(isCorrectAnswer);

      setTimeout(() => {
        setAnswer('')
        setIsCorrect(false);
        setStep(prev => prev + 1);
      }, 3000)
    }
  }

  useEffect(() => {
    if (step === 14) {
      navigate('/course');
    }
  }, [step, navigate]);

  if (!data) {
    return null;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  
  switch(step) {
    case 1:
      return <Part_1 onCliks={()=>setStep(step+1)}/>
    case 2:
      return <Part_2 onCliks={()=>setStep(step+1)}/>
    case 3:
      return <Part_3 onCliks={()=>setStep(step+1)}/>
    case 4:
      return <QuizAudio1 num={0} currentAnswer={answer} isCorrect={isCorrect} answerData={{ answer, isCorrect }} data={data} bottom={<QuizBottom1 num={0} data={data} onClick={onBottomComponentClick} answer={data.quizzes?.[0]?.answers?.[0]?.text} />} txt={data.quizzes?.[0]?.text}  />;
    case 5:
      return <QuizAudio1 num={1} currentAnswer={answer} isCorrect={isCorrect} answerData={{ answer, isCorrect }} data={data} bottom={<QuizBottom1 num={1} data={data} onClick={onBottomComponentClick} answer={data.quizzes?.[1]?.answers?.[0]?.text} />} txt={data.quizzes?.[1]?.text} />;
    case 6:
      return <Part_4 onCliks={()=>setStep(step+1)}/>
    case 7:
      return <QuizAudio2 num={2} currentAnswer={answer} isCorrect={isCorrect} data={data} bottom={<QuizBottom2 num={2} data={data} onClick={onBottomComponentClick} />} txt={data.quizzes?.[2]?.text}/>
    case 8:
      return <QuizAudio2 num={3} currentAnswer={answer} isCorrect={isCorrect} data={data} bottom={<QuizBottom2 num={3} data={data} onClick={onBottomComponentClick} />} txt={data.quizzes?.[3]?.text}/>
    case 9:
      return <QuizAudio1 num={4} currentAnswer={answer} isCorrect={isCorrect} answerData={{ answer, isCorrect }} data={data} bottom={<QuizBottom1 num={4} data={data} onClick={onBottomComponentClick} answer={data.quizzes?.[4]?.answers?.[0]?.text} />} txt={data.quizzes?.[4]?.text} />;
    case 10:
      return <QuizAudio1 num={5} currentAnswer={answer} isCorrect={isCorrect} answerData={{ answer, isCorrect }} data={data} bottom={<QuizBottom1 num={5} data={data} onClick={onBottomComponentClick} answer={data.quizzes?.[5]?.answers?.[0]?.text} />} txt={data.quizzes?.[5]?.text} />;
    case 11:
      return <QuizSpeaking num={6} data={data} onUploadSuccess={handleUploadSuccess} />;
    case 12:
      return <QuizSpeaking num={7} data={data} onUploadSuccess={handleUploadSuccess} />;
    case 13:
      return <QuizAudio1 num={8} currentAnswer={answer} isCorrect={isCorrect} answerData={{ answer, isCorrect }} data={data} bottom={<QuizBottom1 num={8} data={data} onClick={onBottomComponentClick} answer={data.quizzes?.[8]?.answers?.[0]?.text} />} txt={data.quizzes?.[8]?.text} />;
    default:
      return <QuizAudio1 onClicked={onBottomComponentClick} />;
  }
};

export default Lesson;
