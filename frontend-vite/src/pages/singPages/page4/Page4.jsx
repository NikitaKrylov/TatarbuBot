import React from 'react'
import styles from './Page4.module.scss'
import right from '../../../assets/icons/right.svg'
import hamster from '../../../assets/icons/Rectangle_hamster.svg'
import play from '../../../assets/icons/play.svg'

const Page4 = () => {
  return (
    <div className={styles.container}>
      <a className={styles.prev} href="#"><img src={right} alt="" /></a>
      <h2>Впиши слова, которые пропущены</h2>
      
      <section>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
      </section>

      <div className={styles.song}>
          <img src={hamster} alt="song_img" />
          <div className={styles.song_name}>
            <div>
              <h3>Вместе мы сила</h3>
              <p>Черная экономика</p>
            </div>
          </div>
        </div>

        <div className={styles.playing_line}></div>
          <button>
              <img src={play} alt="play" />
          </button>
    </div>

  )
}

export default Page4