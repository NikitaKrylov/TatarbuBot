import React from 'react'
import styles from './Page3.module.scss'
import MainButton from '../../../components/global/Button/MainButton'
import right from '../../../assets/icons/right.svg'
import mascot from '../../../assets/images_course/2.jpg'
import { useNavigate } from 'react-router-dom'

const Page3 = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <a onClick={()=>navigate(-1)} href=""><img src={right} alt="" /></a>
        <div>
          <h2>Теперь <span>прослушай ее по отрывкам</span>, постарайся <span>вставить изученные словa</span> и понять смысл</h2>
          <img src={mascot}></img>
        </div>
        <MainButton text={'Начать'} color={'green'}/>
    </div>
  )
}

export default Page3