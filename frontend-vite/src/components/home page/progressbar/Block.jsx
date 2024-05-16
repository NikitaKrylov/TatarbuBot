import React, { useEffect, useState } from 'react'
import cls from './Progressbar.module.scss'
import arrow from '../../../assets/icons/normal/arrow_right.svg'
const Block=({text, percent, icon})=> {
    const [colorper, setColorper] = useState(null);
    useEffect(()=>{
    
    if (percent <33){
        setColorper('#FF536B');
    }
    else if (33 <= percent && percent < 65){
        setColorper('#FB9D2F');
    }
    else{
        setColorper('#29B393');
    }
    },[percent])

    return (
        <div className={cls.block}>
                <div className={cls.content}>
                    <div className={cls.icon}>
                        <img src={icon} alt='icon_block'/>
                    </div>
                    <div className={cls.block_name}>
                        <span>{text}</span>
                    </div>
                    <div className={cls.point_divider}></div>
                    <div className={cls.percent} style={{color:colorper}}>
                        <span>{percent}%</span>
                    </div>
                    
                </div>
                <div className={cls.block_arrow}>
                    <img src={arrow} alt='arrow'/>
                </div>
        </div>
    )
};
export default Block;