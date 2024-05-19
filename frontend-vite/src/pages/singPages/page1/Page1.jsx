import React from 'react'
import styles from './Page1.module.scss'
import MainButton from '../../../components/global/Button/MainButton'
import right from '../../../assets/icons/right.svg'
import first from '../../../assets/images_course/1.jpg'
import { useNavigate } from 'react-router-dom'

const Page1 = () => {

  const navigate = useNavigate();
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <a href=""><img src={right} alt="" /></a>
        <div>
          <h2>Сначала <span>прослушай</span> песню <span>и постарайся</span> ее <span>почувствовать</span></h2>
          <img src={first}></img>
        </div>
        <MainButton text={'Прослушать песню'} color={'green'} onClick={()=>navigate("/sing/page_2")}/>

      </div>
    </main>
  )
}

export default Page1