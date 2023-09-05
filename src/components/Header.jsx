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
            &#9776;
          </div>

          <ul className={`nav-links ${isNavOpen ? "active" : ""}`}>
            <li>
              <Link to="/">Currently watching</Link>
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
