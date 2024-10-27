import React from 'react'
import "./index.css"


const Resume = () => {
  return (
    <div className='resumeCont resume'>
      
      
      <h1 onClick={() => window.open('/CV-Khach-Karapetyan.pdf', '_blank')}>RESUME</h1>

<a href="/CV-Khach-Karapetyan.pdf" download>
  <span>Download</span>
</a>

    </div>
  )
}

export default Resume
