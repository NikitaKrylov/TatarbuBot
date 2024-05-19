import React from 'react'
import styles from './Page1.module.scss'
import MainButton from '../../../components/global/Button/MainButton'
import right from '../../../assets/icons/right.svg'
import first from '../../../assets/images_course/1.jpg'
import { useNavigate } from 'react-router-dom'

const Page1 = () => {

  return (
    <div className={styles.container}>
      <a href=""><img src={right} alt="" /></a>
      <div>
        <h2>Сначала <span>прослушай</span> песня <span>и постарайся</span> ее <span>почувствовать</span></h2>
        <img src={first}></img>
      </div>
      <MainButton text={'Прослушать песню'} color={'green'}/>
    </div>
  )
}

export default Page1