import React from "react";
import "./EditUser.scss";
import { useState } from "react";

const EditUser = () => {
    
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className="headerEdit">
      <h1>Edit user info</h1>
      <form className="formEdit">
        <div className="formgroup">
          <label htmlFor="username">User name</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="formgroup">
          <label htmlFor="firstName">First name</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="formgroup">
          <label htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="btn_group">
          <button className="sign-in-button " type="submit">
            Save
          </button>
          <button className="sign-in-button " type="submit">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
