import styles from './MainButton.module.scss'
import { useEffect, useState } from 'react';
const MainButton = ({text, color})=>{
    const [maincolor, setMaincolor] = useState(null);
    const [backcolor, setBackcolor] = useState(null);
    useEffect(()=> {
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
            }
    },[])
    
    console.log(maincolor)
    let colorized = {
        backgroundColor: maincolor,
        boxShadow : `0 4px ${backcolor}`
    };
    return(
        <button className={styles.button} style={colorized}>
            {text}
        </button>
    )
};
export default MainButton;