import styles from './Bottom.module.scss'
import home from '../../../assets/icons/normal/home.svg'
import explore from '../../../assets/icons/normal/explore.svg'
import interesting from '../../../assets/icons/normal/interesting.svg'
import profile from '../../../assets/icons/normal/profile.svg'

export default function Bottom (){
    return (
        <bottom className={styles.bottom}>
            <a href="#"><img src={home} alt="home" /></a>
            <a href="#"><img src={explore} alt="explore" /></a>
            <a href="#"><img src={interesting} alt="interesting" /></a>
            <a href="#"><img src={profile} alt="profile" /></a>
        </bottom>
    )
}