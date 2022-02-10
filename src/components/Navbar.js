import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../images/download.svg";
import ContactCard from "./ContactCard";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./../context";
export default function Navbar() {
  const { openSidebar } = useGlobalContext();
  return (
    <nav className="navbar">
      <div className="nav-center">
        <ContactCard></ContactCard>
        <NavLink to="/">
          <img src={logo} alt="AS Electrical" className="logo" />
        </NavLink>
        <div className="nav-header">
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/">
              <div className="link-btn">home</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <div className="link-btn">about</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/products">
              <div className="link-btn">products</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/reviews">
              <div className="link-btn">Reviews</div>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
