import React from 'react'

const techs = [
    {
        src: "https://i.pinimg.com/originals/64/8e/58/648e58d071568bba75276ea8f632a7ad.gif"
    },
    {
        src: "https://i.pinimg.com/originals/64/8e/58/648e58d071568bba75276ea8f632a7ad.gif"
    },
    {
        src: "https://i.pinimg.com/originals/64/8e/58/648e58d071568bba75276ea8f632a7ad.gif"
    },
    {
        src: "https://i.pinimg.com/originals/64/8e/58/648e58d071568bba75276ea8f632a7ad.gif"
    },
    {
        src: "https://i.pinimg.com/originals/64/8e/58/648e58d071568bba75276ea8f632a7ad.gif"
    },
]



const Tech = () => {
  return (
    <div className='prof tech'>
      {
        techs.map((tech, index) => <img src={tech.src} key={index} alt='kk' />)
      }
    </div>
  )
}

export default Tech
