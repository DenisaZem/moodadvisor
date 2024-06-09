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

  useEffect(() => {
    setTimeout(() => {
      setBreathExercise(breathExercise === INHALE ? EXHALE : INHALE);
    }, breathData.time);
  }, [breathExercise, breathData]);

  return (
    <div>
      <motion.div
        className="bubbleBreath__out"
        animate={{}}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 0,
        }}
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
          animate={{
            scale: breathData.scale,
          }}
          transition={{
            duration: 20,
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
            // background: {inhaling ? text1 : text2}
          }}
        >
          {breathData.text}
        </motion.div>
      </motion.div>
    </div>
  );
};
