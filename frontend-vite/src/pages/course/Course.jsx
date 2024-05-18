import React, { useEffect, useState } from 'react'
import cls from "./Course.module.scss"
import CurLesson from '../../components/course/CurLesson/CurLesson';
import Bottom from '../../components/global/Bottom/Bottom.jsx'
import LessonOnCourse from '../../components/course/LessonOnCourse/LessonOnCourse.jsx'
import les1 from '../../assets/images_course/1lesson.png'
import CourseProgress from '../../components/course/CourseProgress/CourseProgress.jsx';
import lock from '../../assets/icons/normal/lock.svg'
import { useLocation } from 'react-router-dom';
const Course=()=> {
  const [stat1, setStat1] = useState("todo");
  const [stat2, setStat2] = useState("locked");
  const [stat3, setStat3] = useState("locked");
  const [progres, setProgress] = useState("1");
  const location = useLocation();
  useEffect(() => {
    setProgress(location.state && location.state.progres)
}, [location]);
  useEffect(() => {
    switch(progres){
      case 1:
        setStat1("todo");
        setStat2("locked");
        setStat3("locked");
        break;
      case 2:
        setStat1("done");
        setStat2("todo");
        setStat3("locked");
        break;
      case 3:
        setStat1("done");
        setStat2("done");
        setStat3("todo");
        break;
    }
  },[progres])
  console.log(progres)
  return (
    <>
      <main className={cls.main}>
        <CurLesson/>
        <CourseProgress progresscourse={progres} num={"Глава первая"} name={"Встреча в Казани"}/>
        <div className={cls.lessonsplace}>
          <LessonOnCourse status={stat1}  nav_to={"/"} photo={les1} nummmer={1} name={'Первые шаги'} knowledge={"Как здороваться, говорить спасибо и прощаться"}/>
          <LessonOnCourse status={stat2}photo={les1} nummmer={2} name={'Мудрец Белем'} knowledge={"Базовые слова для простого диалога"}/>
          <LessonOnCourse status={stat3}photo={les1} nummmer={3} name={'Таинственный амулет'} knowledge={"Как здороваться, говорить спасибо и прощаться"}/>
          <LessonOnCourse status={"locked"}photo={les1} nummmer={4} name={'Прогулка по городу'} knowledge={"Как здороваться, говорить спасибо и прощаться"}/>
          <LessonOnCourse status={"locked"}photo={les1} nummmer={5} name={'Поход в музей'} knowledge={"Как здороваться, говорить спасибо и прощаться"}/>
        </div>
        <CourseProgress  progresscourse={0} num={"Глава первая"} name={"Встреча в Казани"}/>
        <div className={cls.nextChapter}>
          <div className={cls.icon}>
            <img src={lock} alt="lock_icon"/>
          </div>
          <div className={cls.txt}>
            <span>Чтобы перейти к этой главе, сначала закончите главу 1</span>
          </div>
        </div>
      </main>
      <Bottom/>
    </>
    
  )
};
export default Course;
