import React, { useState } from "react";
import "./Navbar.css";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import gollogo from "./gol-logo.jpg";
import { Box, Flex } from "@chakra-ui/react";
import {Link} from "react-router-dom"
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
      <Box display={{ base: "none", md: "flex" }} className="center_box">
        <a href="/">Find Reservations</a>
        <select>
          <option>Packages</option>
          <option></option>
          <option></option>
        </select>
        <select>
          <option>About Lakshdeep</option>
          <option></option>
          <option></option>
        </select>
        <a href="/">About Us</a>
        <a href="/">Gol</a>
        <a href="/">Support</a>
      </Box>

      <Flex className="ls_btn">
       
        <button> <Link to="/login">Login</Link></button>
        
        
        <button className="signup_btn"><Link to="/signup">Signup </Link></button>
       
      </Flex>

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
