import React from 'react'
// import "../../global.css"
import me from "../../core/img/me.jpg"
import "./index.css"


const Profile = () => {
  return (
    <div className='prof profile'>
       
       <div>
       <img src={me} alt='ll' />
       <h2>Khachik Karapetyan</h2>
       </div>

        <p>Proficient in modern web development technologies, including HTML, CSS, JavaScript, React Js, FireBase, with a strong focus on creating responsive and user-friendly interfaces.</p>

    </div>
  )
}

export default Profile
