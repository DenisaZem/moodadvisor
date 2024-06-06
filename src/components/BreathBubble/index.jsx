import "./style.css";
import { motion } from "framer-motion";
import dataBreathExrecise from "./dataBreathExrecise";
import { useParams } from "react-router-dom";

export const BreathBubble = () => {
  const { id } = useParams();
  return (
    <div>
   

            <motion.div
              key={dataBreathExrecise[id].id}
              className="bubbleBreath"
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
