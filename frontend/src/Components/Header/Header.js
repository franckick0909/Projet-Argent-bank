import React from "react";
import "./Header.scss";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../assets/img/argentBankLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
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
          <Link to="/login" className="main-nav-item">
            <FaUserCircle />
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
