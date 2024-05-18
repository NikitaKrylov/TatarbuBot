import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Lesson.module.scss'

import QuizeAudio1 from '../../components/quizes/audio/audio1/QuizeAudio1';
import QuizeAudio2 from '../../components/quizes/audio/audio2/QuizeAudio2';
import QuizeGrammar1 from '../../components/quizes/grammar/grammar1/QuizeGrammar1';
import QuizeGrammar2 from '../../components/quizes/grammar/grammar2/QuizeGrammar2';
import QuizSpeaking from '../../components/quizes/speaking/QuizSpeaking';

const Lesson = () => {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();
    const increment = () =>{
        setStep(step+1);
    }
    const renderQuestion = () => {
        switch(step) {
            case 1: return <QuizeAudio1 onClick={increment}/>;
            case 2: return <QuizeAudio2 onClick={increment}/>;
            case 3: return <QuizeGrammar1 onClick={increment}/>;
            case 4: return <QuizeGrammar2 onClick={increment}/>;
            case 5: return <QuizSpeaking onClick={increment}/>;
            default: return <QuizeAudio1 onClick={increment}/>;
        }
    };
    console.log(step)
    return (
        <section > 
            <form action="">
            {renderQuestion()}
            </form>
        </section>
    )
}

export default Lesson;