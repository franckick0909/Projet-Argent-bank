import axios from "axios";
export const LOGIN = "LOGIN";
export const TOKEN = "TOKEN";
export const LOGOUT = "LOGOUT";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const PROFILE = "PROFILE";
export const PROFILE_ERROR = "PROFILE_ERROR";
export const UPDATE_USER = "UPDATE_USER";

export const loginPosts = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        data
      );
      if (response.status === 200) {
        dispatch({ type: LOGIN, payload: response.data });
        console.log(response.data);
        sessionStorage.setItem("token", response.data.body.token);
        dispatch({ type: TOKEN, payload: { token: response.data.body.token } });
      } else if (response.status === 401) {
        dispatch({ type: LOGIN_ERROR, payload: response.data });
        console.log(response.data);
        dispatch({ type: TOKEN, payload: { token: null } });
      }
    } catch (error) {
      dispatch({ type: LOGIN_ERROR, payload: error.response.data });
      console.log(error.response.data);
      dispatch({ type: TOKEN, payload: { token: null } });
    }
  };
};



export const profilePosts = (dataProfil) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        dataProfil,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 200) {
        dispatch({ type: PROFILE, payload: response.data.body });
        console.log(response.data.body);
      } else if (response.status === 401) {
        dispatch({ type: PROFILE_ERROR, payload: response.data });
        console.log(response.data);
      } else {
        dispatch({ type: PROFILE_ERROR });
        console.log(response.data);
      }
    } catch (error) {
      dispatch({ type: PROFILE_ERROR, payload: error.response.data });
      console.log(error.response.data);
    }
  };
};


export const updateUser = (userName) => {
  return async (dispatch) => {
    if (userName) {
      const response = await axios.put(
        `http://localhost:3001/api/v1/user/profile`,
        userName,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      dispatch({ type: UPDATE_USER, payload: response.data });
      console.log(response.data);
    }
  }
}
