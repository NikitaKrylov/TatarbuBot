import React, { useState } from 'react'
import styles from './QuizeBottom.module.scss'

const QuizeBottom = () => {
    let text1 = 'Сәлам'
    let text2 = 'Сәламат иртә'

    const [button1Color, setButton1Color] = useState(null);
    const [button2Color, setButton2Color] = useState(null);


    const handleButtonClick = (e) => {
        //получение ответа от сервера
        let url = ''
        const [ans, setAns] = useState([]);
        const getApiData = async () => {
            const response = await fetch(url)
                .then((response) => response.json());
                //получаем ответы 

                setAns(response);
        };

        useEffect(() => {
            getApiData();
        }, []);

        e.stopPropagation();
        console.log(e.target);

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
            <button onClick={(e) => handleButtonClick(e)} style={button1Style}>{text1}</button>
            <button onClick={(e) => handleButtonClick(e)} style={button2Style}>{text2}</button>
        </bottom>
    )
}

export default QuizeBottom