import React, { useEffect, useState } from 'react';
import cls from "./Course.module.scss";
import CurLesson from '../../components/course/CurLesson/CurLesson';
import Bottom from '../../components/global/Bottom/Bottom.jsx';
import LessonOnCourse from '../../components/course/LessonOnCourse/LessonOnCourse.jsx';
import les1 from '../../assets/images_course/1lesson.png';
import CourseProgress from '../../components/course/CourseProgress/CourseProgress.jsx';
import lock from '../../assets/icons/normal/lock.svg';
import { useLocation } from 'react-router-dom';
import axios from "axios";

const Course = () => {
  const [stat1, setStat1] = useState("todo");
  const [stat2, setStat2] = useState("locked");
  const [stat3, setStat3] = useState("locked");
  const [progres, setProgress] = useState(1);
  const [data, setData] = useState([]);
  
  const location = useLocation();
  const url = `https://misis52.clayenkitten.ru/api/lessons/all`;

  useEffect(() => {
    axios.get(url)
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    switch (progres) {
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
      default:
        break;
    }
  }, [progres]);

  return (
    <>
      <main className={cls.main}>
        <CurLesson />
        <CourseProgress progresscourse={progres - 1} num={"Глава первая"} name={"Встреча в Казани"} />
        <div className={cls.lessonsplace}>
          {data.map((lesson, index) => (
            <LessonOnCourse
              key={index}
              status={index === 0 ? stat1 : index === 1 ? stat2 : index === 2 ? stat3 : "locked"}
              photo={`https://misis52.clayenkitten.ru/api${lesson.image}`}
              nummmer={index + 1}
              nav_to={`/course/lesson_1`}
              name={lesson.name}
              knowledge={lesson.knowledge}
            />
          ))}
        </div>
        <CourseProgress progresscourse={0} num={"Глава первая"} name={"Встреча в Казани"} />
        <div className={cls.nextChapter}>
          <div className={cls.icon}>
            <img src={lock} alt="lock_icon" />
          </div>
          <div className={cls.txt}>
            <span>Чтобы перейти к этой главе, сначала закончите главу 1</span>
          </div>
        </div>
      </main>
      <Bottom />
    </>
  );
};

export default Course;
