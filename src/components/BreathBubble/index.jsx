import "./style.css";
import { motion } from "framer-motion";
import dataBreathExrecise from "./dataBreathExrecise";
import { useParams } from "react-router-dom";
import dataBreathExercise from "./dataBreathExrecise";

export const BreathBubble = () => {
  const { id } = useParams();
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
              {dataBreathExrecise[id].text}
            </motion.div>

     
     
    </div>
  );
};
