import React from 'react'
import "./index.css"

const Map = ({src}) => {
  return (
    <div className='mapCont map'>
      {/* <img src={src} alt='d'/> */}
      <iframe 
      title='mao'
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98854.71060346864!2d44.406166263980715!3d40.15336119644035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa2dab8fc8b5b%3A0x3d1479ae87da526a!2z1LXWgNaH1aHVtg!5e1!3m2!1shy!2sam!4v1730014269741!5m2!1shy!2sam" 
  width="80" 
  height="80" 
  style={{ border: 0 }} 
  allowFullScreen 
  loading="lazy"
></iframe>
    </div>
  )
}

export default Map
