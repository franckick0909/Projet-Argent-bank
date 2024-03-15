
import "./Header.scss";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../assets/img/argentBankLogo.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { LOGOUT } from "../../actions/post.actions";
import { TOKEN } from "../../actions/post.actions";
import { useNavigate } from "react-router-dom";



const Header = () => {
 
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const login = useSelector((state) => state.loginReducer);
    const isAuthenticated = login.isAuthenticated;

  const handleLog = () => {
    if (isAuthenticated === true) {
      dispatch({ type: LOGOUT });
      dispatch({ type: TOKEN, payload: { token: null } });
      sessionStorage.removeItem("token");
      localStorage.removeItem("token");
      navigate("/");
      window.location.reload();
    } else if (isAuthenticated === false) {
      navigate("/login");
    }
  };

  

  
  return (
    <header className="header">
      <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link
            to="/login"
            className={`main-nav-item ${
              isAuthenticated ? "signOut" : "signIn"
            }`}
            onClick={handleLog}>
            <FaUserCircle />
            {isAuthenticated === true ? "Sign Out" : "Sign In"}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
