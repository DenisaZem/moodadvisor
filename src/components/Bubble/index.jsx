import "./style.css";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
// instal npm install framer-motion

const Bubble = ({ handleClick }) => {
  const [bubbleText, setBubbleText] = useState("Nádech");

  useEffect(() => {
    setTimeout(() => {
      setBubbleText("Výdech");
    }, 3000);
  });

  return (
    <>
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
        <motion.div
          className="bar__fixed"
          animate={{
            scale: [1.5],
          }}
          transition={{
            duration: 6,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 0,
          }}
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
              scale: [1, 1.1, 1.2, 1.3, 1.4, 1.5],
            }}
            transition={{
              from: 1,
              duration: 6,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 0,
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Bubble;

// https://codesandbox.io/p/sandbox/framer-motion-keyframes-0fzv21?file=%2Fsrc%2FApp.tsx%3A4%2C1-22%2C2&from-embed=
