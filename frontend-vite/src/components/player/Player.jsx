import React from 'react'
import { useEffect, useState } from "react"; 
import useSound from "use-sound"; 
import qala from '../../assets/music/tatar.mp3'; 
import img from '../../assets/images_course/1.jpg'

function Player() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [play, { pause, duration, sound }] = useSound(qala);

    const playingButton = () => {
        if (isPlaying) {
          pause(); // приостанавливаем воспроизведение звука
          setIsPlaying(false);
        } else {
          play(); // воспроизводим аудиозапись
          setIsPlaying(true);
        }
      };

  return (
    <div className="component">
      <h2>Playing Now</h2>
      <img
        className="musicCover"
        src={img}
      />
      <div>
        <h3 className="title">Rubaiyyan</h3>
        <p className="subTitle">Qala</p>
      </div>
      <div>
        <button className="playButton">
            play
        </button>
        {!isPlaying ? (
          <button className="playButton" onClick={playingButton}>
            play
          </button>
        ) : (
          <button className="playButton" onClick={playingButton}>
            play
          </button>
        )}
        <button className="playButton">
          play
        </button>
      </div>
    </div>
  )
}

export default Player