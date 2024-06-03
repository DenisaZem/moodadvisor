import React, { useRef, useState } from "react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import "./style.css";
import { useAnimationFrame } from "framer-motion";
// Potřeba importovat ikony --> npm install react-icons

const Sound = () => {
  const ref = useRef(null);

  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 60;
    const y = (1 + Math.sin(t / 1000)) * -40;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

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
      <h1 className="container-sound__title">Sounds</h1>
      <div className="container-sound__content">
        <audio ref={audioRef} src="/components/Sound/music/zkouska.mp3" />
        <div className="controls">
          <div className="obrazek">
            <div className={`cube ${isPlaying ? "rotate" : ""}`} ref={ref}>
              <div className="side front" />
              <div className="side left" />
              <div className="side right" />
              <div className="side top" />
              <div className="side bottom" />
              <div className="side back" />
            </div>
          </div>
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

export default Sound;
