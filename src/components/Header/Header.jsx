import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

//-----------------------------------------------------------------

export const Header = () => {


  return (
    <header className="navbar">
      <nav className="navbar__top">
        <ul className="navbar__menu">
          <li className="navbar__item">
            <Link className="navbar__link" to={"/characters"}>Characters</Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link" to={"/"}>Home</Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link" to={"/chapters"}>Chapters</Link>
          </li>
        </ul>
      </nav>
      {/* <img
        src="../../../img/ramLetters.png"
        alt="Logo"
        className="navbar_logo"
      /> */}
    </header>
  );
};

// export default Header;
