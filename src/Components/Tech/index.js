import React from 'react'
import "./index.css"
// const techs = [
//     {
//         src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtYrycafqLqTTukXIGNr-YdtHkmZc43M-9Pw&s"
//     },
//     {
//       src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtYrycafqLqTTukXIGNr-YdtHkmZc43M-9Pw&s"
//   },
//   {
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtYrycafqLqTTukXIGNr-YdtHkmZc43M-9Pw&s"
// },
// {
//   src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtYrycafqLqTTukXIGNr-YdtHkmZc43M-9Pw&s"
// },
    
// ]

import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiAdobe } from "react-icons/si";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FaFigma } from "react-icons/fa";
const techs = [
  {
    icon : <IoLogoHtml5 size={50}/>
  },
  {
    icon : <IoLogoCss3 size={50}/>
  },
  {
    icon : <FaJs size={50}/>
  },
  {
    icon : <FaReact size={50}/>
  },
  {
    icon : <IoLogoFirebase size={50}/>
  },
  {
    icon : <SiAdobe size={50}/>
  },
  {
    icon : <AiOutlineAntDesign size={50}/>
  },
  {
    icon : <FaFigma size={50}/>
  },
  {
    icon : <div><p>see my</p><p style={{fontStyle:"italic"}}>Soft Skills</p><p>in resume</p></div>
  },

]


const Tech = () => {
  return (
    <div className='techCont tech'>
      {
        techs.map((tech, index) => tech.icon )
      }
     
    </div>
  )
}

export default Tech
