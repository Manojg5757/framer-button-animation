import React from "react";
import { motion,MotionConfig } from "framer-motion";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <MotionConfig transition={{duration:1}}>
      <motion.button 
      className="button1"
       whileTap={{scale:2.5}}
       whileHover={{scale:1.5,rotate:'20deg',zIndex:'1000',y:'200px'}}
      >
        Hello Wandering Coders
      </motion.button>
      <motion.button  
      className="button2"
      whileTap={{scale:2.5}}
       whileHover={{scale:1.5,rotate:'-20deg',y:'200px'}}>
        Hellow Wanderers
      </motion.button>
      </MotionConfig>
    </div>
  );
};

export default App;
