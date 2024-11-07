import React from 'react'
import "./index.css"

import { FiArrowUpRight } from "react-icons/fi";

const WorkItem = ({data}) => {
const {techs} = data

  return (
    <div className='workItem work'>
      <span className='status'>{data.status}</span>  
      <h2>{data.title}</h2>

<div class="img-container">

<img src={data.imgSrc} alt='ll' />

  <div class="overlay">

  <a style={{display:"flex"}}  without="true"  rel="noopener noreferrer" href={data.siteLink} target='_blank'>   
  <h2>View Site</h2>
  <FiArrowUpRight size={30} />
  </a> 


  </div>
</div>



      <div  style={{width:"100%", }} >
       
       <a    style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", color:"white"}} without="true"  rel="noopener noreferrer" href={data.siteLink} target='_blank'>  <h2>View Site</h2>  <FiArrowUpRight size={30} />  </a> 
      </div>

      <span className='status'>Technologies Used</span>
      <div className="techsUsed" >

{
    techs.map((tech, index) => <span key={index} className='ttto'>{tech}</span> )
}

      </div>
    </div>
  )
}

export default WorkItem
