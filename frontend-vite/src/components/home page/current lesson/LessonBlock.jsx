import MainButton from '../../global/Button/MainButton';
import styles from './LessonBlock.module.scss'
import StepsLine from '../../global/stepsLine/StepsLine.jsx'
import ornament from '../../../assets/icons/normal/ornament.svg';
import {useNavigate} from "react-router-dom"
export default function LessonBlock(){
    let nameCourse = 'Путешествие в татарский эпос, ㅤㅤㅤглава первая'
    let numLesson = 1;
    let nameLesson = 'Знакомство';
    const navigate = useNavigate();
    function toCourse(){
        navigate("/course")
    }
    return(
        <>
            <section className={styles.section}>
                <div className={styles.ornament}>
                    <img src={ornament} alt='ornament'/>
                </div>
                <h2 className={styles.h2}>{nameCourse}</h2>
                <div className={styles.div}>
                    <h3 className={styles.h3}>
                        <p className={styles.p_lesson}>Урок {numLesson}</p> 
                        <p className={styles.p}>{nameLesson}</p>
                    </h3>

                    <StepsLine count={5}/>
                    <MainButton text='Продолжить обучение' color='white' onClick={toCourse}/>
                </div>
            </section>
        </>
    )
}