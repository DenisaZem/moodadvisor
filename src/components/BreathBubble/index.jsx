import "./style.css";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { dataBreathExercise } from "./dataBreathExercise";
import { useParams } from "react-router-dom";

const INHALE = "inhale";
const EXHALE = "exhale";

export const BreathBubble = () => {
  const { id } = useParams();

  const [breathExercise, setBreathExercise] = useState(INHALE);
  const exercise = dataBreathExercise[id];
  const breathData = exercise[breathExercise];

  const variants = {
    [INHALE]: {
      scale: exercise[INHALE].scale,
      transition: {
        duration: exercise[INHALE].time,
      },
    },
    [EXHALE]: {
      scale: exercise[EXHALE].scale,
      transition: {
        duration: exercise[EXHALE].time,
      },
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setBreathExercise(breathExercise === INHALE ? EXHALE : INHALE);
    }, breathData.time * 1000);
  }, [breathExercise, breathData]);

  return (
    <div>
      <div
        className="bubbleBreath__out"
        style={{
          width: 300,
          height: 300,
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
        <motion.div
          className="bubbleBreath__in"
          variants={variants}
          animate={breathExercise}
          transition={{
            ease: "easeOut",
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
            backgroundColor: breathData.color,
          }}
        >
          {breathData.text}
        </motion.div>
      </div>
    </div>
  );
};
