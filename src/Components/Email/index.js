import React from 'react'
import "./index.css"
import { MdOutlineEmail } from "react-icons/md";

const Email = () => {
  return (
    <div className='emailCont email'>
    
    <h2   onClick={() => {
    navigator.clipboard.writeText("khachikkarapetyan78@gmail.com")
    alert("Email Copyed") }} >Hire me!
    </h2>
     
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=khachikkarapetyan78@gmail.com&su=Subject&body=Message"
  target="_blank"
  rel="noopener noreferrer"
><MdOutlineEmail className='emailIcon' size={80}/>
</a> 
    </div>
  )
}

export default Email
