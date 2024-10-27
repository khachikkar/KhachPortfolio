import React from "react";
import Exp from "../Exp";
import Profile from "../Profile";
import Slider from "../Slider";
import Resume from "../Resume";
import Map from "../Map";
import Icon from "../Icon";
import Tech from "../Tech";
import Email from "../Email";

import "./index.css";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
const icons = [
  {
    icon: <FaGithub size={80} />,
  },
  {
    icon: <FaLinkedin size={80} />,
  },
  {
    icon: <FaBehanceSquare size={80} />,
  },
];


const All = () => {
  return (
    <div className="mainContainer">
      <div style={{ width: "420px" }}>
        <Profile />
      </div>

      <div
        style={{
          width: "420px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Slider />

        <div style={{ display: "flex", gap: "20px" }}>
          <Map  />
          <Resume />
        </div>
      </div>

      <div style={{ width: "420px", display: "flex", gap: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {icons.map((item, i) => (
            <Icon key={i} src={item.icon} />
          ))}
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Email />
          <Tech />
          {/* <Design /> */}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: "420px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
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
  );
};

export default All;
