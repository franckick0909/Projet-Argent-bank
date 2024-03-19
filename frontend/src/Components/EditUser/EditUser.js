import React from "react";
import "./EditUser.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../actions/post.actions";
import { UPDATE_USER } from "../../actions/post.actions";

const EditUser = () => {
  const login = useSelector((state) => state.loginReducer);
  const profil = useSelector((state) => state.profileReducer);
  const isAuthenticated = login.isAuthenticated;

  const [newUserName, setNewUserName] = useState("");

  const dispatch = useDispatch();
  const userName = useSelector((state) => state.editReducer.userName);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: UPDATE_USER, payload: { userName: newUserName } });
    dispatch(updateUser({ userName: newUserName }));
    setNewUserName("");
  };

  return (
    <div className="headerEdit">
      <h1>Edit <span className="span">{userName ? userName : "User"}</span> info</h1>

      <form className="formEdit" onSubmit={handleSubmit}>
        <div className="formgroup">
          <label htmlFor="username">User name :</label>
          <input
            id="username"
            type="text"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            placeholder={userName ? userName : "User"}
          />
        </div>

        <div className="formgroup">
          <label htmlFor="firstName">First name</label>
          <input
            id="firstName"
            type="text"
            defaultValue={isAuthenticated ? profil.firstName : ""}
            disabled
          />
        </div>

        <div className="formgroup">
          <label htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            type="text"
            defaultValue={isAuthenticated ? profil.lastName : ""}
            disabled
          />
        </div>

        <div className="btn_group">
          <button className="sign-in-button " type="submit">
            Save
          </button>

          <Link to="/profile" className="sign-in-button edit-button" type="submit">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
