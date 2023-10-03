import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="row">
          <div className="nav__container">
            <h1 className="nav__header">NYC Happy Hours</h1>
            <ul className="nav__bar--links">
              <li className="nav__bar--link">
                <Link to="/">Home</Link>
              </li>
              <li className="nav__bar--link">
                <Link to="/bars">Bars</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
