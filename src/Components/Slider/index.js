import React from 'react'
import "./index.css"


const Slider = ({text}) => {
  return (
    <div className='prof slider'>

      
      <p className='status'>2024</p>
      <p> {text || "ksdhjgfkahsjdfg  aksjdhfgkahsjd aksjdhfgkahsjd"} </p>
     

    </div>
  )
}

export default Slider
