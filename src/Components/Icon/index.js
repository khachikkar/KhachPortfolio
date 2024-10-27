import React from 'react'
import "./index.css"
import { motion } from 'framer-motion';





const Icon = ({src}) => {
  return (
    <div className='iconCont icon'>
        {/* <img src={src} alt='tt' /> */}
        {
        <motion.a
        href={src.href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }} // Moves up 10px and returns to original position
        transition={{
          duration: 1, // Duration of the animation
          repeat: Infinity, // Repeats the animation indefinitely
          repeatType: "loop", // Loops back to the start
        }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {src.src}
      </motion.a>
        }
    </div>
  )
}

export default Icon
