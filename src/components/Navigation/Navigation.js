import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navigation.scss";
import Logo from "../../static/Loggo.svg";

const Navigation = () => (
  <header className="navigation">
    <div className="logo">
      <Link to="/">
        <img
          src={Logo}
          alt="Logo of the website. Redirect to homepage"
          title="Logo and homepage redirect"
        />
      </Link>
    </div>
    <nav className="links">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "links__link links__link_active" : "links__link"
        }
        alt="Navigate to homepage"
        title="Homepage"
      >
        Convertor
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "links__link links__link_active" : "links__link"
        }
        alt="Navigate to about page"
        title="About page"
      >
        About
      </NavLink>
    </nav>
  </header>
);

export default Navigation;
