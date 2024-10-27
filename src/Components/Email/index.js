import React from 'react'
import "./index.css"
import { MdOutlineEmail } from "react-icons/md";

const Email = () => {
  return (
    <div className='emailCont email'>
        <h2>Hire me!</h2>
         {/* <img src={src} alt='tt' /> */}
         <MdOutlineEmail size={80}/>
    </div>
  )
}

export default Email
