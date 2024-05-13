import MainButton from '../../global/Button/MainButton';
import styles from './LessonBlock.module.scss'

export default function LessonBlock(){
    let nameCourse = 'Базовый курс, первый модуль'
    let numLesson = 3;
    let nameLesson = 'Название урока';

    return(
        <>
            <section className={styles.section}>
                <h2 className={styles.h2}>{nameCourse}</h2>
                <div className={styles.div}>
                    <h3 className={styles.h3}>
                        <p className={styles.p}>Урок {numLesson}</p> 
                        <p className={styles.p}>{nameLesson}</p>
                    </h3>
                    <div className={styles.progress}> 
                        {/* фн на проверку прогресса => добавить класс в зависимомти от этого */}
                        <div className={styles.active}></div>
                        <div className={styles.progressLine}></div>
                        <div className={styles.progressLine}></div>
                        <div className={styles.progressLine}></div>
                        <div className={styles.progressLine}></div>
                    </div>
                    <MainButton text='Продолжить обучение'/>
                </div>
            </section>
        </>
    )
}