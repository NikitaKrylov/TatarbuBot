import React from 'react'
import cls from "./Course.module.scss"
import CurLesson from '../../components/course/CurLesson/CurLesson';
import Bottom from '../../components/global/Bottom/Bottom.jsx'
import LessonOnCourse from '../../components/course/LessonOnCourse/LessonOnCourse.jsx'
const Course=()=> {
  return (
    <>
      <main className={cls.main}>
        <CurLesson/>
        <LessonOnCourse/>
      </main>
      <Bottom/>
    </>
    
  )
};
export default Course;
