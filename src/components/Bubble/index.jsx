import './style.css';
import { motion } from "framer-motion";
// instal npm install framer-motion

const Bubble = () => {
  return (
    <div className='background'>
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
    </div>
  ); 
}

export default Bubble

// export default function App() {
//   return (
//     <motion.div
//       className="box"
//       animate={{
//         scale: [1, 2, 2, 1, 1],
//         rotate: [0, 0, 180, 180, 0],
//         borderRadius: ["0%", "0%", "50%", "50%", "0%"]
//       }}
//       transition={{
//         duration: 2,
//         ease: "easeInOut",
//         times: [0, 0.2, 0.5, 0.8, 1],
//         repeat: Infinity,
//         repeatDelay: 1
//       }}
//     />
//   );
// }
// https://codesandbox.io/p/sandbox/framer-motion-keyframes-0fzv21?file=%2Fsrc%2FApp.tsx%3A4%2C1-22%2C2&from-embed=