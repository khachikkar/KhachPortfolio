import React from 'react'
import "./index.css"

import { FiArrowUpRight } from "react-icons/fi";

const WorkItem = ({data}) => {
const {techs} = data

  return (
    <div className='workItem work'>
      <span className='status'>{data.status}</span>  
      <h2>{data.title}</h2>
      <img src={data.imgSrc} alt='ll' />

      <div style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", color:"white"}}>
        <h2>View Site</h2>
       <a  without="true"  rel="noopener noreferrer" href={data.siteLink} target='_blank'>  <FiArrowUpRight size={30} />  </a> 
      </div>

      <span className='status'>Technologies Used</span>
      <div style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"flex-start", gap:"20px"}}>

{
    techs.map((tech, index) => <span key={index} className='ttto'>{tech}</span> )
}

      </div>
    </div>
  )
}

export default WorkItem
