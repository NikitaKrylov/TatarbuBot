import React, { useEffect, useState } from 'react'
import cls from './LessonOnCourse.module.scss'
import lock from '../../../assets/icons/normal/lock.svg'
import { useNavigate } from 'react-router-dom';
const LessonOnCourse=({nummmer,photo,name,knowledge,status,nav_to}) => {
  const [maincolor, setMaincolor] = useState(null);
  const [backcolor, setBackcolor] = useState(null);
  const navigate = useNavigate();
  const [txt, setText] = useState(null);
  useEffect(()=>{
    switch(status){
      case "done":
        setMaincolor('#1E1E1E');
        setBackcolor('#F3F2F0');
        setText('Повторить');
        break;
      case "todo":
        setMaincolor('#FFFFFF');
        setBackcolor('#A247FB');
        setText('Начать');
        break;
      case "locked":
        setBackcolor('#F3F2F0');
        setMaincolor('#1E1E1E');
        setText(null);
        break;
    }
    
    
  },[status]);
  let colorized = {
    color:maincolor,
    backgroundColor:backcolor,
    
  }
  return (
    <div className={cls.lesson}>
      <div className={cls.title}>
        <span className={cls.numlesson}>Урок {nummmer}</span>
        <span className={cls.name}>{name}</span>
      </div>
      <div className={cls.content}>
        <div className={cls.photo}>
          <img src={photo} alt='lesson_photo'/>
        </div>
        <div className={cls.rightside}>
          <span style={{color:'#7C7C7C'}}>Ты узнаешь:</span>
          <span className={cls.knowns}>{knowledge}</span>
          {status === "locked" ?(<button disabled className={cls.btn} style={colorized}><img src={lock} width={"15px"} height={"15px"} /></button>):(<button className={cls.btn} style={colorized} onClick={()=>navigate("/course/lesson_1")}><span>{txt}</span></button>)}
        </div>
      </div>
    </div>
  )
};
export default LessonOnCourse;
