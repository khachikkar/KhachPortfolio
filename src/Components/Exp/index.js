import React from 'react'
import "./index.css"
const exdata = [
     {
        id: 0,
        title: "Banner Designer for AI",
        company: "Wirestock",
        time: "2024-now"
    },
    {
        id: 1,
        title: "Software Engeenering Student",
        company: "ACA",
        time: "2023-2024"
    },
    {
        id: 2,
        title: "Software Engeener",
        company: "Restart Service",
        time: "2024-Present"
    },
    {
        id: 3,
        title: "ML Moderator",
        company: "Picsart Inc.",
        time: "2021-2024"
    },
]


const Exp = () => {
  return (
    <div className='expCont exp'>
        
      <span className='status'>1 years of</span>
      <h1>Experence</h1>

      
{
    exdata.map((item)=>{
        return(
            <div key={item.id} className='exitem'>
                <h2>{item.title}</h2>
                <div className='comppart'>
                    <h3>{item.company}</h3>
                    <p>{item.time}</p>
                </div>
          </div>
        )
    })
}


    </div>
  )
}

export default Exp
