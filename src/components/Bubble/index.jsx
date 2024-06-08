import "./style.css";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
// instal npm install framer-motion

const Bubble = ({ handleClick }) => {
  const bubbleTextOptions = [
    "Zhluboka se nadechni",
    "Pojď se uvolnit",
    "Nadechni a vydechni",
    "Nadechni se zhluboka",
    "Dnes je krásný den",
  ];

  const [bubbleText, setBubbleText] = useState("");

  useEffect(() => {
    const TextIndex = Math.floor(Math.random() * bubbleTextOptions.length);
    setBubbleText(bubbleTextOptions[TextIndex]);
  });

  return (
    <div className="bubble">
      <motion.div
        className="bubble__outsite"
        animate={{
          scale: [1, 1.25, 1.3, 1.2, 1.5, 1.6, 1.4, 1.5, 1.3, 1.4],
        }}
        transition={{
          duration: 6,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 0,
        }}
        style={{
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        <motion.div
          className="bubble__insite"
          animate={{
            scale: [1, 1.25, 1.3, 1.1, 1.2, 1.3, 1.4, 1.5, 1.3, 1.4],
          }}
          transition={{
            duration: 6,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 0,
          }}
          style={{
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "10px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {bubbleText}
        </motion.div>
      </motion.div>
      <IoClose className="bubble__close" onClick={handleClick} />
      {/* <div className="bubble__close" onClick={handleClick}>
        Zavřít
      </div> */}
    </div>
  );
};

export default Bubble;

// https://codesandbox.io/p/sandbox/framer-motion-keyframes-0fzv21?file=%2Fsrc%2FApp.tsx%3A4%2C1-22%2C2&from-embed=
