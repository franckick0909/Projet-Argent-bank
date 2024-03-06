import "./HeaderLogger.scss"
import React from "react";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import logo from "../../assets/img/argentBankLogo.png";
import { Link } from "react-router-dom";


const HeaderLogger = () => {


  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link to="/user" className="main-nav-item">
          <FaUserCircle />
          {localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user")).firstName
            : "User"}
        </Link>
        <Link to="/" className="main-nav-item">
          <FaSignOutAlt />
          Sign Out
        </Link>

        {/* <>
            <Link to="/user" className="main-nav-item">
              <FaUserCircle />
              Sign Up
            </Link>
            <Link to="/login" className="main-nav-item">
              <FaSignOutAlt />
              Sign In
            </Link>
          </> */}
      </div>
    </nav>
  );
};

export default HeaderLogger;