import React, { useState } from "react";
import "./Sliderbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Footer from "./Footer";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <aside id="sidebar" className={isExpanded ? "expand" : ""}>
        <div className="d-flex">
          <GiHamburgerMenu
            onClick={toggleSidebar}
            style={{ cursor: "pointer" }}
            className="text-white mx-4 my-4"
            size={35}
          />
          <div className="sidebar-logo">
            <a href="#">Commerce Faculty</a>
          </div>
        </div>
        <div style={{ height: "calc(100% )", overflowY: "auto" }}>
          <ul className="sidebar-nav" style={{ height: "100%" }}>
            <li className="sidebar-item">
              <NavLink to="/bca" className="sidebar-link">
                <Button variant="primary" className="bg-dark me-2">
                  BBA.CA
                </Button>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink to="/bba" className="sidebar-link">
                <Button variant="primary" className="bg-dark me-2">
                  BBA
                </Button>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink to="/bcom" className="sidebar-link">
                <Button variant="primary" className="bg-dark me-2">
                  B.COM
                </Button>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink to="/mcom" className="sidebar-link">
                <Button variant="primary" className="bg-dark me-2">
                  M.COM
                </Button>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
      <Footer />
    </>
  );
};

export default Sidebar;
