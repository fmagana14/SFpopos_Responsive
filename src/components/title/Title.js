// src/Title.js

import { NavLink } from "react-router-dom";
import React from "react";
import "./Title.css";

function Title() {
  return (
    <div className="Title">
      <header>
        <h1>SFPOPOS</h1>
        <p className="Title-Subtitle">
          San Francisco Privately Owned Public Open Spaces
        </p>

        <nav role="navigation">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link-active" : "nav-link"
            }
            to="/"
          >
            List
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link-active" : "nav-link"
            }
            to="/about"
          >
            About
          </NavLink>
        </nav>
      </header>
    </div>
  );
}
export default Title;
