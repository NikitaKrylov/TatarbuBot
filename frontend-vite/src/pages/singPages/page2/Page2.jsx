import React from 'react'
import { useEffect, useState } from "react"; 
import useSound from "use-sound"; 
import qala from '../../../assets/music/tatarcha.mp3';

import styles from './Page2.module.scss'
import right from '../../../assets/icons/right.svg'
import hamster from '../../../assets/images_course/sing.jpg'
import author from '../../../assets/images_course/author.jpg'
import share from '../../../assets/icons/share2.svg'
import played from '../../../assets/icons/play.svg'
import paused from '../../../assets/icons/pause.svg'
import { useNavigate } from 'react-router-dom';

const Page2 = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [play, { pause, duration, sound }] = useSound(qala);

    const playingButton = () => {
        if (isPlaying) {
          pause(); 
          setIsPlaying(false);
        } else {
          play(); 
          setIsPlaying(true);
        }
      };
      const [time, setTime] = useState({
        min: "",
        sec: ""
      });

      const [currTime, setCurrTime] = useState({
        min: "",
        sec: "",
      }); 
    
      const [seconds, setSeconds] = useState(); 
      const navigate = useNavigate();

       useEffect(() => {
          if (duration) {
            const sec = duration / 1000;
            const min = Math.floor(sec / 60);
            const secRemain = Math.floor(sec % 60);
            setTime({
              min: min,
              sec: secRemain
            });
          }
        }, [isPlaying]);

        useEffect(() => {
          const interval = setInterval(() => {
            if (sound) {
              setSeconds(sound.seek([]));
              const min = Math.floor(sound.seek([]) / 60);
              const sec = Math.floor(sound.seek([]) % 60);
              setCurrTime({
                min,
                sec
              });
            }
          }, 1000);
          return () => clearInterval(interval);
        }, [sound]);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <a className={styles.prev} onClick={()=>navigate(-1)} href="#"><img src={right} alt="" /></a>
        <a className={styles.prevr} onClick={()=>navigate('/sing/page_3')} href="#"><img src={right} alt="" /></a>
        <section>
          <img src={hamster} className={styles.photo} alt="hamster" />
          
          <div className={styles.song}>
            <div><img className={styles.author} src={author} alt="song_img" /></div>
            <div className={styles.song_name}>
              <div>
                <h3>Сэлэм юллыйм</h3>
                <p>Ришат Тухватуллин</p>
              </div>
              <a href="#"><img src={share} alt="share width..." /></a>
            </div>
          </div>

          
            <div className={styles.timelineAll}>
              <input
                type="range"
                min="0"
                max={duration / 1000}
                default="0"
                value={seconds}
                className={styles.timeline}
                onChange={(e) => {
                  sound.seek([e.target.value]);
                  }}
                />
                <div className={styles.time}>
                  <p>
                    {currTime.min}:{currTime.sec}
                  </p>
                  <p>
                    {time.min}:{time.sec}
                  </p>
                </div>
          </div>

          
          <div >
          {!isPlaying ? (
            <button className={styles.playButton} onClick={playingButton}>
                <img src={played} alt="pause" />
            </button>
          ) : (
            <button className={styles.playButton} onClick={playingButton}>
                <img src={paused} alt="play" />
            </button>
          )}
            
          </div>
        </section>
      </div>
    </main>
  )
}

export default Page2