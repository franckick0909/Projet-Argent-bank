import "./Form.scss";
import { Link } from "react-router-dom";

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginPosts } from "../../actions/post.actions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LOGIN } from "../../actions/post.actions";
import { TOKEN } from "../../actions/post.actions";
import { LOGIN_ERROR } from "../../actions/post.actions";

const Form = () => {
  // STATES
  const form = useRef();
  const login = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    const loginData = {
      email: form.current[0].value,
      password: form.current[1].value,
      remember: form.current[2].checked,
      token: login.token,
      message: login.message,
      isAuthenticated: login.isAuthenticated,
      loading: login.loading,
    };
    console.log(form.current[2].checked);
    console.log(login.token);
    dispatch(loginPosts(loginData));
    form.current.reset();
  };

  useEffect(() => {
    if (login.isAuthenticated === true) {
      login.message ? console.log(login.message) : console.log("no message");
      setTimeout(() => {
        navigate("/user");
      }, 3000);
    } else if (login.isAuthenticated === false) {
      setTimeout(() => {
        dispatch({ type: LOGIN_ERROR, payload: { message: "" } });
      }, 3000);
    }

    if (login.token) {
      dispatch({ type: TOKEN, payload: { token: login.token } });
      localStorage.setItem("token", login.token);
      console.log(login.token + "token");
    }

    if (form.current[2].checked === true) {
      dispatch({ type: LOGIN, payload: { token: true } });
      localStorage.setItem("token", login.token);
      console.log("token");
    }
  }, [
    login.isAuthenticated,
    login.token,
    form,
    dispatch,
    navigate,
    login.message,
  ]);

  return (
    <form ref={form} onSubmit={(e) => handleForm(e)}>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input id="password" />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      <Link to="/" className="sign-in-button">
        home
      </Link>

      <button type="submit" className="sign-in-button">
        {login.loading ? "loading..." : "sign in"}
      </button>

      <div>
        <p
          className={`message ${
            login.isAuthenticated === true ? "green" : "red"
          }`}>
          {login.message ? login.message : " "}
        </p>
      </div>
    </form>
  );
};

export default Form;
