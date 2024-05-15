import styles from './MainButton.module.scss'
import { useState } from 'react';
export default function MainButton ({text},{color}){
    const [maincolor, setMaincolor] = useState();
    const [backcolor, setBackcolor] = useState();
    switch (color){
        case "violet":
            setMaincolor("#A247FB");
            setBackcolor("#7721CC");
            break;
        case "green":
            setMaincolor("#29B393");
            setBackcolor("#1E8970");
            break;
        case "light_green":
            setMaincolor("#69E1C5");
            setBackcolor("#29B393");
            break;
        case "green":
            setMaincolor("#69E1C5");
            setBackcolor("#29B393");
            break;
        }
    let colorized = {
        color: maincolor,
        boxShadow: "0 4 px"+backcolor
    };
    return(
        <button className={styles.button} style={colorized}>
            {text}
        </button>
    )
}