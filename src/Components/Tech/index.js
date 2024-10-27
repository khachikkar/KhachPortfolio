import React from 'react'
import "./index.css"
const techs = [
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtYrycafqLqTTukXIGNr-YdtHkmZc43M-9Pw&s"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtYrycafqLqTTukXIGNr-YdtHkmZc43M-9Pw&s"
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtYrycafqLqTTukXIGNr-YdtHkmZc43M-9Pw&s"
},
{
  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtYrycafqLqTTukXIGNr-YdtHkmZc43M-9Pw&s"
},
    
]



const Tech = () => {
  return (
    <div className='techCont tech'>
      {
        techs.map((tech, index) => <img src={tech.src} key={index} alt='kk' />)
      }
     
    </div>
  )
}

export default Tech
