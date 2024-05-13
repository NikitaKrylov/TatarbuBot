import styles from './Home.module.scss'
import '../../assets/styles/global.scss'
import DayWord from '../../components/home page/word of day/DayWord'

export default function Home ({name}){
    return(
        <>
        <main>
            <header>Привет, <span>{name}</span></header>
            <DayWord/>
        </main>
        </>
    )
}