import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import { TrainerContext } from "../../context/trainer/TrainerContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { setSearchResults } = useContext(TrainerContext);

  const { isAuthenticated, logout, user, loadUser } = authContext;

  useEffect(() => {
    loadUser();
  }, []);

  const onLogout = () => {
    logout();
    setSearchResults([]);
  };

  const authLinks = (
    <Fragment>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        {user && user.role === "trainer" && <Link to="/profile">Profile</Link>}
      </li>
      <li>
        <Link onClick={onLogout} to="/">
          <span className="hide-sm">Logout</span>
        </Link>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Sign Up</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-dark">
      <Link to="/">
        <h3>Find-a-personal-trainer</h3>
      </Link>

      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

export default Navbar;
