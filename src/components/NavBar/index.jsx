import React from "react";
import CartWidget from "../CartWidget";
import "../NavBar/navBar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="container flex">
        <div>
          <a href="/">BRAND LOGO</a>
        </div>
        <ul className="list flex">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Gaming</a>
          </li>
          <li>
            <a href="/">Productivity</a>
          </li>
          <li>
            <CartWidget />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
