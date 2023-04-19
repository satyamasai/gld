import React, { useState } from "react";
import "./Navbar.css";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import gollogo from "./gol-logo.jpg";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav>
      <div className="logo">
        <img src={gollogo} alt="logo" />
      </div>
      <div className="center_box">
      <a href="/">Find Reservations</a>
<select></select>
      <a href=""></a>
      <a href=""></a>
      <a href=""></a>
      </div>
        <ul className={toggleMenu ? "nav-links mobile" : "nav-links"}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Log in</a>
          </li>
          <li>
            <a href="/">Signup</a>
          </li>
        </ul>
      <div className="menu-icon" onClick={handleToggle}>
        {toggleMenu ? <FaTimes /> : <FaAlignJustify />}
      </div>
    </nav>
  );
}

export default Navbar;
