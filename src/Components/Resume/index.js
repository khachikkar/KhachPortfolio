import React from 'react'
import "./index.css"


const Resume = () => {
  return (
    <div className='resumeCont resume'>
      
      
      <h1 onClick={() => window.open('/CV_Khachik_Karapetyan.pdf', '_blank')}>RESUME</h1>

<a href="/CV_Khachik_Karapetyan.pdf" download>
  <span>Download</span>
</a>

    </div>
  )
}

export default Resume
