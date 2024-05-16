import MainButton from '../../global/Button/MainButton';
import styles from './LessonBlock.module.scss'
import StepsLine from '../../global/stepsLine/StepsLine.jsx'
import ornament from '../../../assets/icons/normal/ornament.svg'
export default function LessonBlock(){
    let nameCourse = 'Базовый курс, первый модуль'
    let numLesson = 3;
    let nameLesson = 'Название урока';

    return(
        <>
            <section className={styles.section}>
                <div className={styles.ornament}>
                    <img src={ornament} alt='ornament'/>
                </div>
                <h2 className={styles.h2}>{nameCourse}</h2>
                <div className={styles.div}>
                    <h3 className={styles.h3}>
                        <p className={styles.p}>Урок {numLesson}</p> 
                        <p className={styles.p}>{nameLesson}</p>
                    </h3>
                    <StepsLine/>
                    <MainButton text='Продолжить обучение' color='light_green'/>
                </div>
            </section>
        </>
    )
}