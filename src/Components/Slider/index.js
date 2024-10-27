import React from 'react'
import "./index.css"
import { motion } from "framer-motion";
import { BsStars } from "react-icons/bs";


const Slider = () => {

  const textVariants = {
    animate: {
      x: ["100%", "-100%"],
      transition: {
        duration: 10,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  return (
    <div className='prof slider'>

      
      <p className='status'>2024</p>
      <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
      <motion.p variants={textVariants} animate="animate">
      <BsStars /> 2024 | KHACH PORTFOLIO | REACT | JS | <BsStars /> | 2024 |  <BsStars /> 2024 | KHACH PORTFOLIO | REACT | JS | <BsStars /> | 2024
      </motion.p>
    </div>
     

    </div>
  )
}

export default Slider
