import "./style.css";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { dataBreathExercise } from "./dataBreathExercise";
import { useParams } from "react-router-dom";

export const BreathBubble = () => {
  const { id } = useParams();
  const text1 = dataBreathExercise[id].text[0];
  const text2 = dataBreathExercise[id].text[1];

  const [currentText, setCurrentText] = useState(text1);

  useEffect(() => {
    setTimeout(() => {
      setCurrentText(text2);
    }, dataBreathExercise[id].time1);
  });

  useEffect(() => {
    setTimeout(() => {
      setCurrentText(text1);
    }, dataBreathExercise[id].time2);
  });

  return (
    <div>
      <motion.div
        key={dataBreathExrecise[id].id}
        className="bubbleBreath"
        animate={{
          scale: dataBreathExercise[id].scale,
        }}
        transition={{
          duration: 6,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 0,
        }}
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {currentText}
        {/* {dataBreathExrecise[id].text} */}
      </motion.div>
    </div>
  );
};
