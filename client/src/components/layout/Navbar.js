import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <h1>
          <a href="index.html">Find-A-Personal-Trainer</a>
        </h1>
        <ul>
          <li>
            <a href="profiles.html">Trainers</a>
          </li>
          <li>
            <a href="register.html">Register</a>
          </li>
          <li>
            <a href="login.html">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
