import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <p>
        <NavLink to="/consumer/login" className="button">
          Consumer
        </NavLink>
      </p>
      <p className="m-8 rounded-xl ">
        <NavLink to="/organisation/login" className="button">
          Organisor
        </NavLink>
      </p>
    </div>
  );
};

export default Home;
