import cls from './CurLesson.module.scss'
import StepsLine from '../../global/stepsLine/StepsLine.jsx'
import ornament from '../../../assets/icons/normal/ornament.svg'
const CurLesson=()=>{
    let nameCourse = 'Курс первый'
    let numLesson = 3;
    let nameLesson = 'Путешествие в татарский эпос';

    return(
        <>
            <section className={cls.section}>
                <div className={cls.ornament}>
                    <img src={ornament} alt='ornament'/>
                </div>
                <h2 className={cls.h2}>{nameCourse}</h2>
                <div className={cls.div}>
                    <h3 className={cls.h3}>
                        <p className={cls.p}>Путешествие<br/>в татарский эпос</p>
                    </h3>
                    <div className={cls.lines}>
                        <StepsLine count={5}/>
                    </div>
                    
                </div>
            </section>
        </>
    )
};
export default CurLesson;