import "./Form.scss";
import { Link } from "react-router-dom";

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginPosts } from "../../actions/post.actions";
import { Navigate } from "react-router-dom";

const Form = () => {


  // STATES
  const form = useRef();
  const login = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();

    console.log(form);

    const loginData = {
      email: form.current[0].value,
      password: form.current[1].value,
      remember: form.current[2].checked,
      token: login.token,
      message: login.message,
      isAuthenticated: login.isAuthenticated,
      loading: login.loading,
    };
    console.log(loginData);
    dispatch(loginPosts(loginData));
    form.current.reset();
  };


  return (
    <form ref={form} onSubmit={(e) => handleForm(e)}>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input required type="email" id="email" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input required id="password" />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      <Link to="/" className="sign-in-button">
        home
      </Link>

      <button className="sign-in-button">
        {login.loading ? "loading..." : "sign in"}
      </button>

      {/* <div className={`message ${login.message ? "active" || "out" : ""}`}>
        
        <p className="">
          {login.message === "Error: data and hash arguments required" ? (
            ""
          ) : (
            login.message
          )}
        </p>
      </div> */}

      <div>
        <p className={`message ${login.isAuthenticated === true ? "active" : null && login.error  === true ? "out" : null}`}>

          {login.message === "User successfully logged in" ? (
            <Navigate to="/user" />
          ) : login.message === "Error: data and hash arguments required" ? (
            ""
          ) : (
            login.message
          )}
        </p>
      </div>
    </form>
  );
};

export default Form;
