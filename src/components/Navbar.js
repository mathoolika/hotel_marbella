import React, { Component } from "react";
import logo from "../images/Logo.png";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from "react-router-dom";
import fire from "../config/Fire";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  Togglehandler = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Marbella" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.Togglehandler}
            >
              <FaAlignJustify className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms/">Rooms</Link>
            </li>
            <li>
              <Link to="/aboutus/">About Us</Link>
            </li>
            <li>
              <button name="logout-btn" onClick={this.logout}>Logout</button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
