import "./style.css";
import React, { useRef } from "react";
import { useAnimationFrame } from "framer-motion";

export const Cube = ({ isPlaying }) => {
  const ref = useRef(null);

  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 60;
    const y = (1 + Math.sin(t / 1000)) * -40;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  const className = `cube ${isPlaying ? "rotate" : ""}`;

  return (
    <div className="container__cube">
      <div className={className} ref={ref}>
        <div className="side front" />
        <div className="side left" />
        <div className="side right" />
        <div className="side top" />
        <div className="side bottom" />
        <div className="side back" />
      </div>
    </div>
  );
};
