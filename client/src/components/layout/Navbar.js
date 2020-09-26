import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user, loadUser } = authContext;

  console.log("user", user);

  useEffect(() => {
    loadUser();
  }, []);

  const onLogout = () => {
    logout();
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
      <h1>
        <Link to="/">
          <small>Find-a-personal-trainer</small>
        </Link>
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

export default Navbar;
