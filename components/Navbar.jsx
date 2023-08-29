import React from 'react'

const Navbar = () => {
  return (
    <div className="header flex justify-between h-20 items-center text-white border-b border-solid border-white">
        <div><img src="Logo.png" alt="" className="h-10 pl-8 w-50" /></div>
        <div className="links flex justify-evenly w-[600px] text-sm tracking-[10px]">
          <a href="#Skills">PLAY</a>
          <a href="#">RULES</a>
          <a href="#">CONTACT</a>
        </div>
    </div>
  )
}

export default Navbar