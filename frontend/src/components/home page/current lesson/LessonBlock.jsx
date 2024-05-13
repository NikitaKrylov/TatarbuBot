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
                </div>
            </section>
        </>
    )
}