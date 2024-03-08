import axios from "axios";

export const LOGIN = "LOGIN";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const PROFILE = "PROFILE";
export const PROFILE_ERROR = "PROFILE_ERROR";


export const loginPosts = (data) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:3001/api/v1/user/login", data)
      .then((response) => {
        dispatch({ type: LOGIN, payload: response.data });
        localStorage.setItem("token", response.data.token);
      })
      .catch((error) => {
        dispatch({ type: LOGIN_ERROR, payload: error.response.data });
      });
  };
};



export const profilePosts = (token) => {
  return (dispatch) => {
    return axios
      .get("http://localhost:3001/api/v1/user/profile", {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        dispatch({ type: PROFILE, payload: response.data });
        localStorage.getItem("profile", response.data);
      })
      .catch((error) => {
        dispatch({ type: PROFILE_ERROR, payload: error.response.data });
      });
  };
};
