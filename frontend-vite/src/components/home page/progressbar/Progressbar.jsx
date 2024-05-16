import React from 'react'
import cls from './Progressbar.module.scss'
import speaking from '../../../assets/icons/normal/speaking.png'
import arrow from '../../../assets/icons/normal/arrow_right.svg'
const Progressbar =()=> {
  return (
    <div className={cls.progressbar}>
        <div className={cls.block}>
            <div className={cls.content}>
                <div className={cls.icon}>
                    <img src={speaking} alt='icon_block'/>
                </div>
                <div className={cls.block_name}>
                    <span>Чтение</span>
                </div>
                <div className={cls.point_divider}></div>
                <div className={cls.percent}>
                    <span>23%</span>
                </div>
                
            </div>
            <div className={cls.block_arrow}>
                <img src={arrow} alt='arrow'/>
            </div>
        </div>
        
    </div>
  )
};
export default Progressbar;
