import React from 'react'
import styles from './Page3.module.scss'
import MainButton from '../../../components/global/Button/MainButton'
import right from '../../../assets/icons/right.svg'
import mascot from '../../../assets/images_course/2.jpg'
import { useNavigate } from 'react-router-dom'

const Page3 = () => {

  const navigate = useNavigate();
  return (
    <main className={styles.main}>
      <button className={styles.prev} onClick={()=>navigate("/singMain")}><img src={right} alt="" /></button>
      <div className={styles.container}>
          <div className={styles.title}>
            <h2>Теперь <span>прослушай ее по отрывкам</span>, постарайся <span>вставить изученные словa</span> и понять смысл</h2>
            <img src={mascot}></img>
          </div>
          <MainButton text={'Начать'} color={'green'} onClick={()=>navigate("/sing/page_4")}/>
      </div>
    </main>

  )
}

export default Page3;