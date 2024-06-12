import React, { useRef, useState } from "react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import "./style.css";
import { useParams } from "react-router-dom";
import { musicData } from "../../pages/SoundPage/index.jsx";
import { Cube } from "../Cube/index.jsx";
import { useTranslation } from "react-i18next";

// Potřeba importovat ikony --> npm install react-icons

const OneSound = () => {
  // const ref = useRef(null);
  const { id } = useParams();
  const { t } = useTranslation();

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
      <h1 className="container-sound__title">{t(`sound.${id}.title`)}</h1>
      <div className="container-sound__content--buttons">
        <a href={`/music/${Number(id) === 0 ? 5 : Number(id) - 1}`}>
          {t("soundControl.0")}
        </a>
        <a href="/music">{t("soundControl.1")}</a>
        <a href={`/music/${Number(id) === 5 ? 0 : Number(id) + 1}`}>
          {t("soundControl.2")}
        </a>
      </div>
      <div className="container-sound__content">
        <audio ref={audioRef} src={`/components/OneSound/music/${id}.mp3`} />
        <div className="controls">
          <Cube isPlaying={isPlaying} />

          <div className="playButtons">
            <button
              onClick={handleBackward}
              className="control-button backward"
            >
              <FaBackward />
              <p>{t("soundControl.3")}</p>
            </button>
            <button
              onClick={togglePlayPause}
              className="control-button play-pause"
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button onClick={handleForward} className="control-button forward">
              <FaForward />
              <p>{t("soundControl.4")}</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneSound;
