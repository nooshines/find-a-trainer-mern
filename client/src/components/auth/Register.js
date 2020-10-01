import React, { Fragment, useContext, useState, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

import { Link, Redirect } from "react-router-dom";

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated && role === "trainer") {
      props.history.push("/newprofile");
    } else if (isAuthenticated) {
      props.history.push("/home");
    }
    if (error === "User already exists") {
      setAlert(error, "danger");
      clearErrors();
    }
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    role: "",
  });

  const { name, email, password, password2, role } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("please enter all fields", "danger");
    } else if (password !== password2) {
      setAlert("passwords do not match", "danger");
    } else {
      console.log("role", role);
      register({
        name,
        email,
        password,
        role,
      });
    }
  };

  return (
    <Fragment>
      <h2 className="large text-primary">Sign Up</h2>
      <p className="lead">
        <i className="fas fa-user" /> Create Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            minLength="6"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            minLength="6"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <h5>I am </h5>
          <input
            type="radio"
            name="role"
            value="basic"
            // checked={type === "basic"}
            onChange={onChange}
          />{" "}
          not a personal trainer{" "}
          <input
            type="radio"
            name="role"
            value="trainer"
            // checked={type === "trainer"}
            onChange={onChange}
          />{" "}
          a Personal trainer
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Fragment>
  );
};

export default Register;
