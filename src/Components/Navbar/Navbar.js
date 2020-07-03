import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <h2 className="logo-text">Pickar</h2>
        </div>
        <ul className="ul-list">
          <li className="list-item">
            <Link to="/">Converter</Link>
          </li>
          <li className="list-item">
            <Link to="/ViewHistory">View conversions</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
