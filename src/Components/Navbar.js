import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Components/Images/logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingBar from "react-top-loading-bar";

export default function Navbar() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="menu-bar">
      <LoadingBar
        color="#f11946"
        progress={isLoading ? 100 : 0}
        onLoaderFinished={() => setIsLoading(false)}
      />
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#1c2331" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="" width={60} height={70} />
          </a>
          <h3 className="text-white d-none d-lg-block">
            Sarhad College of Science, Commerce and Arts
          </h3>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={"collapse navbar-collapse " + (isMenuOpen ? "show" : "")}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  exact
                  to="/"
                  onClick={handleNavLinkClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/about"
                  onClick={handleNavLinkClick}
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/administration"
                  onClick={handleNavLinkClick}
                >
                  Administration
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/contact"
                  onClick={handleNavLinkClick}
                >
                  Contact
                </NavLink>
              </li>
              {isAuthenticated && (
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/academics"
                    onClick={handleNavLinkClick}
                  >
                    Academics
                  </NavLink>
                </li>
              )}
              {!isAuthenticated && (
                <li className="nav-item">
                  <button
                    className="btn btn-primary me-2 bg-dark"
                    style={{ width: "14vh" }}
                    onClick={() => {
                      loginWithRedirect();
                      setIsLoading(true);
                    }}
                  >
                    Log In
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
