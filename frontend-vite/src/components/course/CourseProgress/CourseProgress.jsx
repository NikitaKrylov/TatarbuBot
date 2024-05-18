import React from 'react'
import cls from './CourseProgress.module.scss'
const CourseProgress=({progress, num, name})=> {
  return (
    <div className={cls.courseprogress}>
        <div className={cls.curChapter}>
            <span className={cls.num}>{num}</span>
            <span className={cls.name}>{name}</span>
        </div>
        <div className={cls.progres}>
            <span>{progress}/5 уроков пройдено</span>
        </div>
    </div>
  )
};
export default CourseProgress;
