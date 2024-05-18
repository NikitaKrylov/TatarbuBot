import styles from './Home.module.scss'
import '../../assets/styles/global.scss'
import DayWord from '../../components/home page/word of day/DayWord'
import LessonBlock from '../../components/home page/current lesson/LessonBlock'
import Tooltip from '../../components/home page/tooltip/Tooltip'
import Progressbar from '../../components/home page/progressbar/Progressbar'
import Bottom from '../../components/global/Bottom/Bottom.jsx'
const Home = () => {
    // const tg = window.Telegram.WebApp;
    // let name = tg.initDataUnsafe.user.first_name;
    return(
        <>
        <main className={styles.main}>
            <header>Привет, <span>{name}</span></header>
            <DayWord/>
            <LessonBlock/>
            <Tooltip />
            <Progressbar/>
            
        </main>
        <Bottom/>
        </>
    )
};
export default Home;