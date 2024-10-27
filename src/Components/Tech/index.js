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
    icon : <IoLogoHtml5 key="1" size={50}/>
  },
  {
    icon : <IoLogoCss3  key="2" size={50}/>
  },
  {
    icon : <FaJs  key="3" size={50}/>
  },
  {
    icon : <FaReact  key="4" size={50}/>
  },
  {
    icon : <IoLogoFirebase  key="5" size={50}/>
  },
  {
    icon : <SiAdobe  key="6" size={50}/>
  },
  {
    icon : <AiOutlineAntDesign  key="7" size={50}/>
  },
  {
    icon : <FaFigma  key="8" size={50}/>
  },
  {
    icon : <div><p>see my</p><p style={{fontStyle:"italic"}}>Soft Skills</p><p>in resume</p></div>
  },

]


const Tech = () => {
  return (
    <div className='techCont tech'>
      {
        techs.map((tech, i) => <div  key={i}>{tech.icon}</div> )
      }
     
    </div>
  )
}

export default Tech
