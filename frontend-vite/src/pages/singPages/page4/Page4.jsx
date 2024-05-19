import React from 'react'
import { useEffect, useState } from "react"; 
import useSound from "use-sound"; 
import qala from '../../../assets/music/part_music.mp3';

import styles from './Page4.module.scss'
import right from '../../../assets/icons/right.svg'
import hamster from '../../../assets/images_course/author.jpg'
import play from '../../../assets/icons/play.svg'
import played from '../../../assets/icons/play.svg'
import paused from '../../../assets/icons/pause.svg'
import { useNavigate } from 'react-router-dom';


const Page4 = () => {

  const [isPlaying, setIsPlaying] = useState(false);
    const [play, { pause, duration, sound }] = useSound(qala);
    const navigate = useNavigate()

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

  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const handleInputChange1 = (e) => {
    setInputValue1(e.target.value.toLowerCase());
  };

  const handleInputChange2 = (e) => {
    setInputValue2(e.target.value.toLowerCase());
  };

  const checkAnswer = () => {
    const correctAnswer1 = 'сэлэм';
    const correctAnswer2 = 'калыйм';

    const isCorrect1 = inputValue1 === correctAnswer1;
    const isCorrect2 = inputValue2 === correctAnswer2;

    const input1 = document.getElementById('check1');
    const input2 = document.getElementById('check2');

    if (isCorrect1) {
      input1.style.backgroundColor = '#C0F8EB';
    } else {
      input1.style.backgroundColor = '#FFCBD2';
    }

    if (isCorrect2) {
      input2.style.backgroundColor = '#C0F8EB';
    } else {
      input2.style.backgroundColor = '#FFCBD2';
    }
  };


  return (
    <div className={styles.container}>
      <a onClick={()=>navigate(-1)} className={styles.prev} href="#"><img src={right} alt="" /></a>
      <h2>Впиши слова, которые пропущены</h2>
      
      <section>
        <p><input  type="text" id='check1'  value={inputValue1} onChange={handleInputChange1}/> юллыйм сина <br />
          Туып ускэн авылым <br />
          Карап <input  type="text" name="" id="check2"  value={inputValue2} onChange={handleInputChange2} /> сина эй <br />
          Сагындым сине авыл
        </p>
        <button className={styles.btnCheck} onClick={checkAnswer}>проверить</button>
      </section>

      <div className={styles.song}>
          <img src={hamster} alt="song_img" />
          <div className={styles.song_name}>
            <div>
              <h3>Сэлэм юллыйм</h3>
              <p>Ришат Тухватуллин</p>
            </div>
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
    </div>

  )
}

export default Page4