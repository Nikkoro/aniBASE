import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">
              ani<strong>BASE</strong>
            </Link>
          </div>

          <div className="menu-icon" onClick={toggleNav}>
            <i className="fas fa-bars"></i>
          </div>

          <ul
            className={`nav-links ${isNavOpen ? "active" : ""}`}
            onClick={toggleNav}
          >
            <li>
              <Link to="/">Watching</Link>
            </li>

            <li>
              <Link to="/watched">Completed</Link>
            </li>

            <li>
              <Link to="/add" className="btn btn-main">
                Search
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
