import React from 'react'
import MainButton from '../../../components/global/Button/MainButton.jsx'
import part_1 from '../../../assets/images_course/part_1.png'
import cls from './Parts.module.scss'
const Part_1=({onCliks})=> {
  return (
    <div className={cls.content}>
        <span className={cls.text}>
             Наконец-то <span className={cls.greened}>я доехал в Казань</span>
             , жутко устал в дороге, как-никак даю уже 3 концерт за эту неделю
        </span>
        <div className={cls.photo}>
            <img src={part_1} />
        </div>
        <MainButton color={"green"} onClick={onCliks} text={"ДАЛЬШЕ"}/>
    </div>
  )
};
export default Part_1;
