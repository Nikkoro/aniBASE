import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    if (window.innerWidth <= 768) {
      setIsNavOpen(!isNavOpen);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 768 && isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isNavOpen]);

  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">
              ani<strong>BASE</strong>
            </Link>
          </div>

          <div
            className={`menu-icon ${isNavOpen ? "active" : ""}`}
            onClick={toggleNav}
          >
            {isNavOpen ? (
              <i className="fas fa-times "></i>
            ) : (
              <i className="fas fa-bars "></i>
            )}
          </div>

          <ul
            className={`nav-links ${isNavOpen ? "active" : ""}`}
            onClick={toggleNav}
          >
            <li>
              <i className="fa-fw far fa-eye"></i>
              <Link to="/">Watching</Link>
            </li>

            <li>
              <i className="fa-fw far fa-eye-slash"></i>
              <Link to="/watched">Completed</Link>
            </li>

            <li>
              <i class="fas fa-search"></i>
              <Link to="/add" className={isNavOpen ? "" : "btn"}>
                Search
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
