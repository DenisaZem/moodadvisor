import React, { useRef, useState } from "react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import "./style.css";
import { useParams } from "react-router-dom";
import { musicData } from "../../pages/SoundPage/index.jsx";
import { Cube } from "../Cube/index.jsx";

// Potřeba importovat ikony --> npm install react-icons

const OneSound = () => {
  // const ref = useRef(null);
  const { id } = useParams();

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleForward = () => {
    audioRef.current.currentTime += 5;
  };

  const handleBackward = () => {
    audioRef.current.currentTime -= 5;
  };

  return (
    <div className="container-sound">
      <h1 className="container-sound__title">{musicData[id].title}</h1>
      <div className="container-sound__content--buttons">
        <a href={`/music/${parseInt(id, 10) - 1}`}>Vzad</a>
        <a href="/music">Zpět na výběr hudby</a>
        <a href={`/music/${parseInt(id, 10) + 1}`}>Vpřed</a>
      </div>
      <div className="container-sound__content">
        <audio ref={audioRef} src={`/components/Sound/music/${id}.mp3`} />
        <div className="controls">
          <Cube isPlaying={isPlaying} />

          <div className="playButtons">
            <button
              onClick={handleBackward}
              className="control-button backward"
            >
              <FaBackward />
              <p> 5 sekund vzad</p>
            </button>
            <button
              onClick={togglePlayPause}
              className="control-button play-pause"
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button onClick={handleForward} className="control-button forward">
              <FaForward />
              <p> 5 sekund vpřed</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneSound;
