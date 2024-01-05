import React, { useState } from "react";

import logo1 from '../../images/background/b2s.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoRestaurant } from "react-icons/io5";
import { BsBag } from "react-icons/bs";

const Navbar = () => {
  const [smallScreen, setSmallScreen] = useState(false);
  console.log(smallScreen)
  return (
    <nav className="navbar">
      <div className="app-logo">
        <img src={logo1} alt="hello" />
        <ul className="app-links">
        <li>
          <a href="#home"> Home</a>{" "}
        </li>
        <li>
          <a href="#about"> About</a>{" "}
        </li>
        <li>
          <a href="#menu"> Menu</a>{" "}
        </li>
        <li>
          <a href="#awards"> Awards</a>{" "}
        </li>
        <li>
          <a href="#contact"> Contact</a>{" "}
        </li>
      </ul>
      </div>
   
      <div className="register">
        <a>Log In</a>
        <div />
        <a className="circle">
            <BsBag />
            <span >2</span>
            
            </a>
      </div>

      <div className="app-hamburger" >
        <h3 onClick={() => setSmallScreen(true)}>
          <GiHamburgerMenu />
        </h3>

        {smallScreen && (
          <div className="app-overlay">
            <div className="app-cross">
              <h6  onClick={() => setSmallScreen(false)} >
                <IoRestaurant/>
              </h6>
            </div>
            <ul className="app-small-screen-links">
              <li>
                <a href="#home"> Home</a>{" "}
              </li>
              <li>
                <a href="#about"> About</a>{" "}
              </li>
              <li>
                <a href="#menu"> Menu</a>{" "}
              </li>
              <li>
                <a href="#awards"> Awards</a>{" "}
              </li>
              <li>
                <a href="#contact"> Contact</a>{" "}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
