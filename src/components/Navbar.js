import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../images/download.svg";
import ContactCard from "./ContactCard";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <ContactCard></ContactCard>
        <NavLink to="/">
          <img src={logo} alt="AS Electrical" className="logo" />
        </NavLink>
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
            <NavLink to="/testimonial">
              <div className="link-btn">testimonial</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <div className="link-btn">ContactUs</div>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
