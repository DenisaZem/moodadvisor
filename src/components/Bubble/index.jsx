import './style.css';
import { motion } from "framer-motion";
// instal npm install framer-motion

const Bubble = () => {
  return (
    <motion.div
      className="bubble"
      animate={{
        scale: [1, 1.1, 1.1, 0.95, 1], 
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
        background: "blue",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "20px",
        fontWeight: "bold",
      }}
    >
      Zhluboka se nadechni
    </motion.div>
  ); 
}

export default Bubble