import React from 'react'
import Exp from '../Exp'
import Profile from '../Profile'
import Slider from '../Slider'
import Resume from '../Resume'
import Map from '../Map'
import Icon from '../Icon'
import Tech from '../Tech'

import "./index.css"
// import "../../global.css"
import Email from '../Email'
import Design from '../Design'
const  icons = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtYrycafqLqTTukXIGNr-YdtHkmZc43M-9Pw&s"
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtYrycafqLqTTukXIGNr-YdtHkmZc43M-9Pw&s"
  },{
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtYrycafqLqTTukXIGNr-YdtHkmZc43M-9Pw&s"
  },
]

const map = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtYrycafqLqTTukXIGNr-YdtHkmZc43M-9Pw&s" 
const All = () => {
  return (
    <div className='mainContainer'>


<div style={{width:"420px"}}>

<Profile />

</div>

<div style={{width:"420px", display:"flex", flexDirection:"column", gap:"20px" }} >

<Slider />

<div style={{display:"flex",gap:"20px" }}> 

<Map src={map} />
<Resume />
</div>


</div>

<div  style={{width:"420px",display:"flex", gap:"20px" }}>



<div style={{display:"flex",flexDirection:"column",gap:"20px" }}>

{
    icons.map((item, i)=> <Icon src={item.src}/>)
}

</div>



<div style={{width:"100%",display:"flex",flexDirection:"column",gap:"20px"}}>

<Email src={map} />
<Tech />
{/* <Design /> */}
</div>

</div>


<div style={{display:"flex",width:"420px",flexDirection:"column",gap:"20px"}}>
    <Exp />
</div>

{/* <div className='hh'>
<Profile />
</div>

<div className='fl'>
<Slider />
<div className='mm'>
<Map src={map}/>
<Resume />
</div>
</div>

<div className='iconPart'>

<div className='iconsp'>
{
  icons.map((item, i)=> <Icon key={i} src={item} />)
}
</div>

<div className='myus'>
<Icon src="https://i.pinimg.com/originals/dd/50/b6/dd50b6932dfd6ff35c020c63f7e1213f.gif"/>

<Tech />

</div>

</div>

<div className='exppart'>
  <Exp />
</div> */}


</div>
  )
}

export default All
