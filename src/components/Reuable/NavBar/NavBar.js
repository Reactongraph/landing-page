import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="topnav" id="myTopnav">
      <Link href="#home">
        Home
      </Link>
      <Link href="#news">Orders</Link>
      <Link href="#contact">Contact</Link>
      <Link href="#about">About</Link>
      <div className="lastnav">
        <Link href="#about">Get Shade Now</Link>
      </div>
    </div>
	
  );
};

export default NavBar;
