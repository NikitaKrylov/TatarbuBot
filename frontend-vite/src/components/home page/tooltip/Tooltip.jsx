import React from 'react'
import cls from './Tooltip.module.scss'
import active_icon from '../../../assets/icons/active/Explain.svg'
import normal_icon from '../../../assets/icons/normal/Explain.svg'
import { useState } from 'react'
const Tooltip = ()=> {
    const [status, setStatus] = useState(false);
    return (
        <div className={cls.tooltip}>
            <div className={cls.text}>
                <span>Прокачивай языковые<br/> мускулы сбалансированно</span>
            </div>
            <button onClick={()=>setStatus(!status)}>
                <div className={cls.icon}>
                    {status === true ? (<img src={active_icon} alt='tooltip'/>):(<img src={normal_icon} alt='tooltip'/>) } 
                </div>
            </button>
            
        </div>
    )
    };
export default Tooltip;
