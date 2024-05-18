import styles from './Bottom.module.scss'
import home_normal from '../../../assets/icons/normal/home.svg'
import home_active from '../../../assets/icons/active/home.svg'
import explore_normal from '../../../assets/icons/normal/explore.svg'
import explore_active from '../../../assets/icons/active/explore.svg'
import interesting_normal from '../../../assets/icons/normal/interesting.svg'
import interesting_active from '../../../assets/icons/active/interesting.svg'
import profile_normal from '../../../assets/icons/normal/profile.svg'
import profile_active from '../../../assets/icons/active/profile.svg'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Bottom (){
    const [page, setPage] = useState('home');
    const [home,setHome] = useState(home_normal);
    const [explore,setExplore] = useState(explore_normal);
    const [interesting,setInteresting] = useState(interesting_normal);
    const [profile,setProfile] = useState(profile_normal)
    const navigate = useNavigate();
    useEffect(()=>{
        switch(page){
            case "home":
                setHome(home_active);
                setExplore(explore_normal);
                setInteresting(interesting_normal);
                setProfile(profile_normal);
                break
            case "explore":
                setHome(home_normal);
                setExplore(explore_active);
                setInteresting(interesting_normal);
                setProfile(profile_normal);
                break
            case "interesting":
                setHome(home_normal);
                setExplore(explore_normal);
                setInteresting(interesting_active);
                setProfile(profile_normal);
                break
            case "profile":
                setHome(home_normal);
                setExplore(explore_normal);
                setInteresting(interesting_normal);
                setProfile(profile_active);
                break
        }
    },[page])
    
    return (
        <div className={styles.bottom}>
            <a href="#" onClick={()=>{setPage('home');navigate('/');}}><img src={home} alt="home" /></a>
            <a href="#" onClick={()=>setPage('explore')}><img src={explore} alt="explore" /></a>
            <a href="#" onClick={()=>setPage('interesting')}><img src={interesting} alt="interesting" /></a>
            <a href="#" onClick={()=>setPage('profile')}><img src={profile} alt="profile" /></a>
        </div>
    )
}