import styles from './MainButton.module.scss'
import { useEffect, useState } from 'react';
const MainButton = ({text, color, onClick})=>{
    const [maincolor, setMaincolor] = useState(null);
    const [backcolor, setBackcolor] = useState(null);
    const [textcolor, setTextcolor] = useState(null);
    const [fontweig, setFontweig] = useState("700");
    useEffect(()=> {
        switch (color){
            case "violet":
                setMaincolor("#A247FB");
                setBackcolor("#7721CC");
                setTextcolor('white')
                break;
            case "green":
                setMaincolor("#29B393");
                setBackcolor("#1E8970");
                setTextcolor('white')
                break;
            case "light_green":
                setMaincolor("#69E1C5");
                setBackcolor("#29B393");
                setTextcolor('white')
                break;
            
            case "white":
                setMaincolor("#FFFFFF");
                setBackcolor("#D1D1D1");
                setTextcolor("#1E1E1E");
                setFontweig("400");
                break;
            }
    },[])
    let colorized = {
        backgroundColor: maincolor,
        boxShadow : `0 4px ${backcolor}`,
        color: textcolor,
        fontWeight:fontweig,
    };
    return(
        <button className={styles.button} style={colorized} onClick={onClick}>
            {text}
        </button>
    )
};
export default MainButton;