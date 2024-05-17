import React, { useState } from 'react'
import styles from './QuizeBottom.module.scss'

const QuizeBottom = () => {
    let text1 = 'Сәлам'
    let text2 = 'Сәламат иртә'

    const [button1Color, setButton1Color] = useState(null);
    const [button2Color, setButton2Color] = useState(null);

    const handleButtonClick = (buttonNumber) => {
        if (buttonNumber === true) {
            setButton1Color('#29B393');
            setButton2Color(null);
        } else if (buttonNumber === false) {
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
            <button onClick={() => handleButtonClick(true)} style={button1Style}>{text1}</button>
            <button onClick={() => handleButtonClick(false)} style={button2Style}>{text2}</button>
        </bottom>
    )
}

export default QuizeBottom