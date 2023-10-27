import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="headCon">
      <div className="left">
        <h1>AW<span>WW</span>ARDS</h1>
      </div>
      <div className="right">
        <div className="right1">
        <ul>
          <li>HOME</li>
          <div></div>
          <li>WINNERS</li>
          <div></div>
          <li>NOMINEES</li>
          <div></div>
          <li>DIRECTORY</li>
          <div></div>
          <li>SHOP</li>
          <div></div>
          <li>JOBS</li>
          <div></div>
          <span>BLOG</span>
          <div></div>
          <li>ABOUT US</li>
        </ul>
        </div>
        <div className="right2">
          <button>CREATE YOUR SITE</button>
          <div className="image">
            <img src="./src/images/darksearch icon.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
