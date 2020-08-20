import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import logo from "../images/logo.svg";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-light">Rub</span>
            <span className="font-weight-bold">Devs</span>
          </Link>
          <Link className="Navbar__brand" to="/characters">
            <span className="font-weight-light">Characters</span>
          </Link>
          <Link className="Navbar__brand" to="/Badges">
            <span className="font-weight-light">Badges</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
