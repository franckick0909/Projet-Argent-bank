import React from "react";
import "./EditUser.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../actions/post.actions";

const EditUser = () => {

  const login = useSelector((state) => state.loginReducer);
  const profil = useSelector((state) => state.profileReducer);
  const isAuthenticated = login.isAuthenticated;


  const [newUserName, setNewUserName] = useState("");
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.editReducer.userName);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_USER", payload: { userName: newUserName } });
    dispatch(updateUser({ userName: newUserName }));
    setNewUserName("");
  };


  return (
    <div className="headerEdit">
      <h1>Edit {isAuthenticated ? profil.userName : "user"} info</h1>

      <form className="formEdit" onSubmit={handleSubmit}>
        <div className="formgroup">
          <label htmlFor="username">User name :</label>
          <input
            defaultValue={isAuthenticated ? profil.userName : ""}
            id="username"
            type="text"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
        </div>

        <div className="formgroup">
          <label htmlFor="firstName">First name</label>
          <input
            id="firstName"
            type="text"
            defaultValue={isAuthenticated ? profil.firstName : ""}
          />
        </div>

        <div className="formgroup">
          <label htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            type="text"
            defaultValue={isAuthenticated ? profil.lastName : ""}

          />
        </div>

        <div className="btn_group">
          <button className="sign-in-button " type="submit">
            Update
          </button>

          <Link to="/user" className="sign-in-button edit-button" type="submit">
            Retour
          </Link>
        </div>
        <p className="newusername">Nouvel Username : {userName}</p>
      </form>
    </div>
  );
};

export default EditUser;
