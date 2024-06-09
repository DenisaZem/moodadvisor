import "./style.css";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { dataBreathExercise } from "./dataBreathExercise";
import { useParams } from "react-router-dom";

export const BreathBubble = () => {
  const { id } = useParams();

  // const text1 = dataBreathExercise[id].text[0];
  // const text2 = dataBreathExercise[id].text[1];

  // const color1 = dataBreathExercise[id].color1;
  // const color2 = dataBreathExercise[id].color2;

  // const text_Inhale = dataBreathExercise[id].inhaling.text;
  // const text_Exhale = dataBreathExercise[id].exhale.text;

  // const time_Inhale = dataBreathExercise[id].inhaling.time;
  // const time_Exhale = dataBreathExercise[id].exhale.time;

  // const scale_Inhale = dataBreathExercise[id].inhaling.time;
  // const scale_Exhale = dataBreathExercise[id].exhale.time;

  // const { time1, time2 } = dataBreathExercise[id];

  const exercise = dataBreathExercise[id];

  const [breathExercise, setBreathExercise] = useState("inhale");



  useEffect(() => {
    const timeout = breathExercise ? "inhale" : "exhale"

    setTimeout(() => {
      setInhaling(!inhaling);
    }, timeout);
  }, [inhaling, time_Inhale, time_Exhale]);

  return (
    <div>
      <motion.div
        key={dataBreathExercise[id].id}
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
          key={dataBreathExercise[id].id}
          className="bubbleBreath__in"
          animate={{
            scale: dataBreathExercise[id].scale,
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
          {inhaling ? text1 : text2}
        </motion.div>
      </motion.div>
    </div>
  );
};
