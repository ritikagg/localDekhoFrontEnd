import React from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const { isAuth } = useAuth();

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="brand-title">
            LocalDekho
          </a>
          <div
            className={
              !expanded ? "navbar-links menu-collapse" : "navbar-links"
            }
          >
            <ul className="links-list">
              <li className="nav-item">
                <NavLink
                  activeClassName="is-active"
                  exact={true}
                  className="nav-link"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="is-active"
                  exact={true}
                  className="nav-link"
                  to="/"
                >
                  Explore Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="is-active"
                  exact={true}
                  className="nav-link"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                {!isAuth && (
                  <NavLink
                    activeClassName="is-active"
                    exact={true}
                    className="nav-link"
                    to="/login"
                  >
                    Login
                  </NavLink>
                )}
                {isAuth && (
                  <NavLink
                    activeClassName="is-active"
                    exact={true}
                    className="nav-link"
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="fab"
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {expanded ? "X" : <i className="bx bx-menu-alt-right"></i>}
      </div>
    </>
  );
};

export default Navbar;
