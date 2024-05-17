import React from 'react'
import cls from "./Course.module.scss"
import CurLesson from '../../components/course/CurLesson/CurLesson';
import Bottom from '../../components/global/Bottom/Bottom.jsx'
import LessonOnCourse from '../../components/course/LessonOnCourse/LessonOnCourse.jsx'
import les1 from '../../assets/images_course/1lesson.png'
const Course=()=> {
  return (
    <>
      <main className={cls.main}>
        <CurLesson/>
        <LessonOnCourse photo={les1}nummmer={1} name={'Первые шаги'} knowledge={"Как здороваться, говорить спасибо и прощаться"}/>
      </main>
      <Bottom/>
    </>
    
  )
};
export default Course;
