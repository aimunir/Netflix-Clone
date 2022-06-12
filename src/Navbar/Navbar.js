import React, { useState , useEffect } from 'react'
import './Navbar.css'
const Navbar = () => {
 
    const [show,handleShow]=useState(false);

   const transitionNavBar=()=>{
    if(window.scrollY >100){
        handleShow(true);
    }
    else{
        handleShow(false);
    }    
   }
    

    useEffect(() => {
        window.addEventListener("scroll",transitionNavBar);
        return ()=>window.addEventListener("scroll",transitionNavBar);
      },[]);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <div className="nav-container">
            <img className='nav_logo' src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
            
            <img  className='nav_avatar' src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png" alt="" />

        </div>

    </div>
  )
}

export default Navbar