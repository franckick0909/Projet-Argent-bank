import axios from "axios";
export const LOGIN = "LOGIN";
export const TOKEN = "TOKEN";
export const LOGOUT = "LOGOUT";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const PROFILE = "PROFILE";


export const loginPosts = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3001/api/v1/user/login", data);
      if (response.status === 200) {
        dispatch({ type: LOGIN, payload: response.data });
        console.log(response.data);
        sessionStorage.setItem("token", response.data.body.token);
        dispatch({ type: TOKEN, payload: { token: response.data.body.token } });
        console.log(token);
      }
    }
    catch (error) {
      dispatch({ type: LOGIN_ERROR, payload: error.response.data });
      console.log(error.response.data);
    }
  }
}


export const logoutPosts = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT });
  };
};

const token = localStorage.getItem("token");

export const profilePosts = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3001/api/v1/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      if (response.status === 200) {
        dispatch({ type: PROFILE, payload: response.data });
        sessionStorage.getItem("token", response.data.body.token);
        console.log("token", "2");
      } else {
        dispatch({ type: LOGIN_ERROR, payload: response.data.message });
      }
    }
    catch (error) {
      console.log(error.message)
    }
  }
}