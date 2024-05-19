import React from 'react'
import MainButton from '../../../components/global/Button/MainButton.jsx'
import part_2 from '../../../assets/images_course/part_2.png'
import cls from "./Parts.module.scss"
const Part_2=({onCliks})=> {
  return (
    <div className={cls.content}>
        <span className={cls.text}>
        Чем бы заняться...
        Я же даже не знаю как сказать на татарском, что <span className={cls.greened}>я ничего не понимаю</span>
        </span>
        <div className={cls.photo}>
            <img src={part_2} />
        </div>
        <MainButton text={"ДАЛЬШЕ"}color={"green"}onClick={onCliks}/>
    </div>
  )
};
export default Part_2;
