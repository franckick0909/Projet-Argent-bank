import "./Form.scss";
import { Link } from "react-router-dom";


const Form = () => {


  return (
    <form>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input
          required
          type="email"
          id="email"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          required
          id="password"
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      <Link to="/user" className="sign-in-button">
        home
      </Link>

      <button className="sign-in-button">
        sign in
      </button>

        <div className="alert alert-danger" role="alert">
          
        </div>
    </form>
  );
};

export default Form;
