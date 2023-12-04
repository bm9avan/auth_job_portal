import React, { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useSelector } from "react-redux";
import "./NavBar.css";
import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
  const status = useSelector((s) => s.status);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Outlet />
      <nav className="navbar" onClick={toggleMenu}>
        <div className="navbar-logo">@bm9avan</div>
        <div className={`navbar-links ${showMenu ? "show" : ""}`}>
          <NavLink className={({isActive})=>isActive?"active": ""} to="/">Home</NavLink>
          <NavLink className={({isActive})=>isActive?"active": ""} to="/about">About Us</NavLink>
          <NavLink className={({isActive})=>isActive?"active": ""} to="/events">Events</NavLink>
          <NavLink className={({isActive})=>isActive?"active": ""} to="/account">
            {status ? (
              "My Account"
            ) : (
              <button className="navbar-btn">Sign Up / Log In</button>
            )}
          </NavLink>
        </div>
        <div className={`menu-icon ${showMenu ? "rotate" : ""}`}>
          <AiOutlineCaretDown />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
