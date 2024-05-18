import React from 'react'
import cls from "./Course.module.scss"
import CurLesson from '../../components/course/CurLesson/CurLesson';
import Bottom from '../../components/global/Bottom/Bottom.jsx'
import LessonOnCourse from '../../components/course/LessonOnCourse/LessonOnCourse.jsx'
import les1 from '../../assets/images_course/1lesson.png'
import CourseProgress from '../../components/course/CourseProgress/CourseProgress.jsx';
import lock from '../../assets/icons/normal/lock.svg'
const Course=()=> {
  return (
    <>
      <main className={cls.main}>
        <CurLesson/>
        <CourseProgress progress={1} num={"Глава первая"} name={"Встреча в Казани"}/>
        <div className={cls.lessonsplace}>
          <LessonOnCourse nav_to={"/"} photo={les1} nummmer={1} name={'Первые шаги'} knowledge={"Как здороваться, говорить спасибо и прощаться"}/>
          <LessonOnCourse photo={les1} nummmer={1} name={'Первые шаги'} knowledge={"Как здороваться, говорить спасибо и прощаться"}/>
        </div>
        <CourseProgress  progress={0} num={"Глава первая"} name={"Встреча в Казани"}/>
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
