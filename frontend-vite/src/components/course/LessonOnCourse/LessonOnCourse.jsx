import React, { useEffect, useState } from 'react'
import cls from './LessonOnCourse.module.scss'
const LessonOnCourse=({nummmer,photo,name,knowledge,completed})=> {
  const [maincolor, setMaincolor] = useState(null);
  const [backcolor, setBackcolor] = useState(null);
  const [txt, setText] = useState(null);
  useEffect(()=>{
    if (completed === true){
      setMaincolor('#1E1E1E');
      setBackcolor('#F3F2F0');
      setText('Повторить')
    }
    else{
      setMaincolor('#FFFFFF');
      setBackcolor('#A247FB');
      setText('Начать')

    }

  },[completed]);
  let colorized = {
    color:maincolor,
    backgroundColor:backcolor
  }
  return (
    <div className={cls.lesson}>
      <div className={cls.title}>
        <span className={cls.numlesson}>Урок{nummmer}</span>
        <span className={cls.name}>{name}</span>
      </div>
      <div className={cls.content}>
        <div className={cls.photo}>
          <img src={photo} alt='lesson_photo'/>
        </div>
        <div className={cls.rightside}>
          <span style={{color:'#7C7C7C'}}>Ты узнаешь:</span>
          <span className={cls.knowns}>{knowledge}</span>
          <button className={cls.btn} style={colorized}>{txt}</button>
        </div>
      </div>
    </div>
  )
};
export default LessonOnCourse;
