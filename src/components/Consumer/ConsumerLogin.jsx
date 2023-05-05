import React from "react";
import { NavLink } from "react-router-dom";
import "./ConsumerLogin.css";

const ConsumerLogin = () => {
  return (
    <div class="login-container">
      <h1>Login</h1>
      <form action="" method="post">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required />

        <label for="password">Password</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Login</button>
        <p>
          Don't have an account <NavLink to="/consumer/signup">sign up</NavLink>{" "}
          here
        </p>
      </form>
    </div>
  );
};

export default ConsumerLogin;
