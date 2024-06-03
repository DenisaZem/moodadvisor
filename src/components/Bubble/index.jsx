import "./style.css";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
// instal npm install framer-motion

const Bubble = () => {
  const bubbleTextOptions = [
    "Zhluboka se nadechni",
    "Relaxuj",
    "Nadechni a vydechni",
    "Nech si to projít hlavou",
    "Uvolni se"
  ];

  const [bubbleText, setBubbleText] = useState("");

  useEffect(() => {
    const TextIndex = Math.floor(Math.random() * bubbleTextOptions.length);
    setBubbleText(bubbleTextOptions[TextIndex]);
  });

  return (
    <div className="background">
      <motion.div
        className="bubble"
        animate={{
          scale: [1, 1.4, 1.5, 1.3, 1],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
        }}
        style={{
          width: 250,
          height: 250,
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        {bubbleText}
      </motion.div>
    </div>
  );
};

export default Bubble;

// https://codesandbox.io/p/sandbox/framer-motion-keyframes-0fzv21?file=%2Fsrc%2FApp.tsx%3A4%2C1-22%2C2&from-embed=
