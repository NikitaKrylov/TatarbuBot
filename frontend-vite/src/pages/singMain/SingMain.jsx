import React, { useState } from 'react'
import styles from './SingMain.module.scss'
import man from '../../assets/icons/man.svg'
import card1 from '../../assets/icons/card1.svg'
import card2 from '../../assets/icons/card2.svg'
import card3 from '../../assets/icons/card3.svg'
import vectorright from '../../assets/icons/vectorright.svg'
import Bottom from '../../components/global/Bottom/Bottom'

function SingMain() {
    const [inputValue, setInputValue] = useState('Найти любимую песню')
  
    return (
    <>
    <div className={styles.container}>
        <main>
            <>
                <h2>На волне</h2>
                <h3>Изучай язык, прослушивая и исполняя любимые хиты</h3>
            </>
            <a href="#">
                <div className={styles.podcasts}>
                    <h4>Сегодня на репите</h4>
                    <div className={styles.left}>
                        <img src={man} alt="" />
                        <div>
                            <h5>Рэхмэт</h5>
                            <h6>Ильназ Сафиулин</h6>
                        </div>
                    </div>
                </div>
            </a>
            <input className={styles.finder} placeholder='Найдите свою любимую' type="text" />
            <div className={styles.filter}>
                <a href='#'>Все</a>
                <a href='#'>Новичкам</a>
                <a href='#'>Продвинутым</a>
            </div>
            <div className={styles.cards}>
                <a href='#' className={styles.card}>
                    <div>
                        <h2>100 лучших песен</h2>
                        <p>Подборка 100 лучших песен на татарском языке</p>
                    </div>
                    <img src={card1} alt="" />
                </a>
                <a href='#' className={styles.card}>
                    <div>
                        <h2>А по-татарски?</h2>
                        <p>Слушай иностранные песни, переведенные на татарский языке</p>
                    </div>
                    <img src={card2} alt="" />
                </a>
                <a href='#' className={styles.card}>
                    <div>
                        <h2>Полезные статьи</h2>
                        <p>Читай интересные и актуальные статьи и узнавай о языке чуточку больше</p>
                    </div>
                    <img src={card3} alt="" />
                </a>
            </div>
            <div className={styles.other}>
                <div className={styles.text}>
                    <div>
                        <h5>Жанры</h5>
                        <p>Найди свой жанр или открой для себя что-то новое</p>
                    </div>
                    <img src={vectorright} alt="" />
                </div>
                <div className={styles.cards}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className={styles.other}>
                <div className={styles.text}>
                    <div>
                        <h5>По настроению</h5>
                        <p>Подборки под твое настроение</p>
                    </div>
                    <img src={vectorright} alt="" />
                </div>
                <div className={styles.cards}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </main>

        <Bottom />
    </div>
    </>
  )
}

export default SingMain