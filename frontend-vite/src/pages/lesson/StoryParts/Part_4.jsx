import React from 'react'
import MainButton from '../../../components/global/Button/MainButton.jsx'
import part_4 from '../../../assets/images_course/part_4.png'
import cls from "./Parts.module.scss"
const Part_4=({onCliks})=> {
  return (
    <div className={cls.content}>
        <span className={cls.text}>
            Теперь ты знаешь как здороваться на татарском, закрепим?
        </span>
        <div className={cls.photo}>
            <img src={part_4} />
        </div>
        <MainButton text={"ДАЛЬШЕ   "} color={"green"} onClick={onCliks}/>
    </div>
  )
};
export default Part_4;
