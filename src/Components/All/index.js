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
import WorkItem from "../WorkItem";

import { Workitems } from "../../core/WorkItms";

const icons = [
  {
    src: <FaGithub size={80} />,
    href: "https://github.com/khachikkar"
  },
  {
    src: <FaLinkedin size={80} />,
    href: "https://www.linkedin.com/in/khachik-karapetyan/"

  },
  {
    src: <FaBehanceSquare size={80} />,
    href: "https://www.behance.net/khachikkarapet31"

  },
];






const All = () => {
  return (
    <div className="mainContainer">

{/* Profile */}
      <div style={{ width: "400px" }}>
        <Profile />
      </div>

{/* Slider, Map, Resume */}
      <div
        style={{
          width: "400px",
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

{/* Tech, Icons, Email */}
      <div style={{ width: "400px", display: "flex", gap: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {icons.map((item, i) => (
            <Icon key={i} src={item} />
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

{/* Exp */}
      <div
        style={{
          display: "flex",
          width: "400px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Exp />
      </div>


{
   Workitems.map((item)=> <WorkItem key={item.id} data={item}/>)
}


    </div>
  );
};

export default All;
