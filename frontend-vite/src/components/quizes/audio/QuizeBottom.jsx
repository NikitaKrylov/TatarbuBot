import React, { useState, useEffect } from 'react'
import styles from './QuizeBottom.module.scss'
import axios from "axios";

const QuizeBottom = ({numquestion}) => {
    const [button1Color, setButton1Color] = useState(null);
    const [button2Color, setButton2Color] = useState(null);

    let url = `https://misis52.clayenkitten.ru/api/quizzes/${numquestion}`
    const [answers, setAnswers] = useState([]);

    const getData = async function fetchData() {
        try {
            const response = await axios.get(url);
            const data = response.data;
            setAnswers(data.answers)
            
        } catch (error) {
            console.error(error);
        }

        console.log(answers);
    }


    useEffect(() => {
        getData();
    }, []);

    let text1 = '';
    let text2 = '' ;

    // let correct = answers.filter((ans) => ans.is_correct === true)
    // console.log(correct);
    // let correctText = correct[0].text;
    // console.log(correctText);

    const handleButtonClick = (e) => {

        e.stopPropagation();
        let userAns = e.target;
        userAns.value === correct ? console.log('true') : console.log('false');

        //проверка данной кнопки на правильность
        //если правильно, то у этой кнопки фон #29B393 и цвет ...
        //если неправильно, то у этой кнопки фон #FF536B и цвет ...

        if (ans === true) {
            setButton1Color('#29B393');
            setButton2Color(null);
        } else if (ans === false) {
            setButton1Color(null);
            setButton2Color('#FF536B');
        }
    }

    let button1Style = {
        backgroundColor: button1Color,
        color: button1Color ? 'white' : 'black',
    }

    let button2Style = {
        backgroundColor: button2Color,
        color: button2Color ? 'white' : 'black',
    }

    return (
        <bottom className={styles.bottom}>
            <button onClick={(e) => handleButtonClick(e)} style={button1Style} value={text1}>{text1}</button>
            <button onClick={(e) => handleButtonClick(e)} style={button2Style} value={text2}>{text2}</button>
        </bottom>
    )
}

export default QuizeBottom