import "./HeaderLogger.scss";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import logo from "../../assets/img/argentBankLogo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../../actions/post.actions";
import { TOKEN } from "../../actions/post.actions"; 




import { profilePosts } from "../../actions/post.actions";
import { useEffect } from "react";

const HeaderLogger = () => {


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = useSelector((state) => state.loginReducer);
  const isAuthenticated = login.isAuthenticated;

  const profil = useSelector((state) => state.profileReducer);
  const userName = useSelector((state) => state.editReducer.userName);


  useEffect(() => {
    dispatch(profilePosts());
    dispatch({ type: "UPDATE_USER", payload: { userName: profil.userName } });
    dispatch({ type: TOKEN, payload: { token: sessionStorage.getItem("token") } });
}, [dispatch, login.isAuthenticated, profil.userName, userName]);

  
  
  const handleIsAuthenticated = () => {

    if (isAuthenticated === true) {
      dispatch({ type: LOGOUT });
      dispatch({
        type: TOKEN, payload: { token: sessionStorage.removeItem("token") },
      });
      navigate("/");
      window.location.reload();
    } else {
      navigate("/login");
    }
  };

  return (
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
        <Link to="/user" className="main-nav-item">
          <FaUserCircle className="iconUserCircle" />
          {isAuthenticated ? "Welcome " + profil.userName || userName : "User"}

          {/* {isAuthenticated ? "Welcome " + profil.userName : "User"} */}
        </Link>

        <Link
          to="/"
          onClick={handleIsAuthenticated}
          className={`main-nav-item ${isAuthenticated ? "signOut" : "signIn"}`}
        >
          <FaSignOutAlt />
          {isAuthenticated ? "Sign Out" : "Sign In"}
        </Link>
      </div>
    </nav>
  );
};

export default HeaderLogger;
