import "./style.css";
import { motion } from "framer-motion";
import React, { useState } from "react";

export const BreathBubble = () => {
//   const [showBubble, setShowBubble] = useState(false);

  const handleButtonClick = () => {
    setShowBubble(true); 
  };

  return (
    <div>
      <motion.div
        onClick={handleButtonClick}
        className="bub"
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
        Ahoj
      </motion.div>
 
    </div>
  );
};
