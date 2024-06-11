import "./style.css";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IoClose } from "react-icons/io5";
// instal npm install framer-motion

const Bubble = ({ handleClick }) => {
  const { t } = useTranslation();
  const [bubbleText, setBubbleText] = useState(t("bubble.inhale"));
  const [showBubble] = useState(() => {
    const lastLoad = localStorage.getItem("lastLoad");
    return (
      lastLoad === null ||
      new Date(lastLoad).getTime() < new Date().getTime() - 1000 * 10
    );
  });

  useEffect(() => {
    if (showBubble) {
      localStorage.setItem("lastLoad", new Date());
    }
  }, [showBubble]);

  useEffect(() => {
    setTimeout(() => {
      setBubbleText(t("bubble.exhale"));
    }, 3000);
  });

  if (!showBubble) {
    return null;
  }

  return (
    <div className="bubble-container">
      <div className="bubble">
        <motion.div
          className="bubble__outside"
          animate={{
            scale: [1.4],
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
            className="bubble__inside"
            animate={{
              scale: [1, 1.2, 1.3, 1.4, 1.3, 1.2, 1.1],
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
      <div className="bar">
        <div
          className="bar__fixed"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <motion.div
            className="bar__progress"
            animate={{
              width: "100%",
            }}
            transition={{
              from: 0,
              duration: 6,
              ease: "linear",
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Bubble;

// https://codesandbox.io/p/sandbox/framer-motion-keyframes-0fzv21?file=%2Fsrc%2FApp.tsx%3A4%2C1-22%2C2&from-embed=
