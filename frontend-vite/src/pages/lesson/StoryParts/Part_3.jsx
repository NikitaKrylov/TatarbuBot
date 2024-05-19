import React from 'react'
import MainButton from '../../../components/global/Button/MainButton.jsx'
import part_3 from '../../../assets/images_course/part_3.png'
import cls from "./Parts.module.scss"
const Part_3=({onCliks})=> {
  return (
    <div className={cls.content}>
        <span className={cls.text}>
        Надо бы выучить несколько самых нужный слов, <span className={cls.greened}>сделать, так сказать Первые шаги</span>
        </span>
        <div className={cls.photo}>
            <img src={part_3} />
        </div>
        <MainButton text={"ПЕРЕЙТИ К УРОКУ"} color={"green"} onClick={onCliks}/>
    </div>
  )
};
export default Part_3;
