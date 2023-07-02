import React from 'react'
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
    <nav >
      <div className='ml-[48px]'>
        <a>
            <img src={logo} class="h-[50px]"/>
        </a>
        
      </div>
    </nav>
    
    </>
  )
}

export default Navbar