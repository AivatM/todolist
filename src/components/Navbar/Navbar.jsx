import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="navbar-brand">ToDo</div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/" exact>
            Главная
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            Информация
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
