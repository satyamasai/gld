import React, { useState } from "react";
import "./Navbar.css";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import gollogo from "./gol-logo.jpg";
import { Box, Button, Flex } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import AdminDashboard from "./../../Pages/Admin/AdminDashboard";
function Navbar() {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const gldadminkey = JSON.parse(localStorage.getItem("gldadminkey")) || null;

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  // --------------handle logout------------

  const handleLogout = () => {
    localStorage.setItem("gldadminkey", null);
    navigate("/");
  };
  // ----------------------------------------
  return (
    <nav>
      <div className="logo">
        <a href="/">
          <img src={gollogo} alt="logo" />
        </a>
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
        {gldadminkey ? (
          <p style={{cursor:"pointer"}} onClick={handleLogout}>
            Admin Logout
          </p>
        ) : (
          <a href="/admindashboard">Admin Dashboard</a>
        )}{" "}
      </Box>

      <Flex className="ls_btn">
        <button>
          {" "}
          <Link to="/login">Login</Link>
        </button>

        <button className="signup_btn">
          <Link to="/signup">Signup </Link>
        </button>
      </Flex>

      <ul  className={toggleMenu ? "nav-links mobile" : "nav-links"}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Log in</a>
        </li>
        <li>
          <a href="/">Signup</a>
        </li>
        <li>
          {gldadminkey ? (
            <Button  onClick={handleLogout } colorScheme="red">Admin Logout</Button>
          ) : (
            <a href="/admindashboard">Admin Dashboard</a>
          )}
        </li>
      </ul>
      <div className="menu-icon" onClick={handleToggle}>
        {toggleMenu ? <FaTimes /> : <FaAlignJustify />}
      </div>
    </nav>
  );
}

export default Navbar;
