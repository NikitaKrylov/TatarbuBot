import styles from './Home.module.scss'
import '../../assets/styles/global.scss'

export default function Home ({name}){
    return(
        <>
        <section>
            <header>Привет, <span>{name}</span></header>
        </section>
        </>
    )
}