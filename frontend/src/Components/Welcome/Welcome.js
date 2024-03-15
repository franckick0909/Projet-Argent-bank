import React from "react";
import "./Welcome.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Welcome = () => {

  const login = useSelector((state) => state.loginReducer);
  const profil = useSelector((state) => state.profileReducer);

  const isAuthenticated = login.isAuthenticated;


    return (
      <div className="header">
        <h1 className="welcomeTitle">
          Welcome back
          <br />
          {isAuthenticated ? profil.userName : "user"}
        </h1>
        <Link to="/editprofil" className="edit-button">
          Edit Name
        </Link>
      </div>
    );
};

export default Welcome;