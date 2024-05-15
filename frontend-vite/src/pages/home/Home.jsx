import styles from './Home.module.scss'
import '../../assets/styles/global.scss'
import DayWord from '../../components/home page/word of day/DayWord'
import LessonBlock from '../../components/home page/current lesson/LessonBlock'

export default function Home ({name}){
    return(
        <>
        <main className={styles.main}>
            <header>Привет, <span>{name}</span></header>
            <DayWord/>
            <LessonBlock/>
        </main>
        </>
    )
}