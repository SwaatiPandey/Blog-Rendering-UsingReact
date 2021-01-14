import { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";
import logo from "../image/header-logo.png";
class Navigation extends Component {
  render() {
    return (
      <div className="navbar">
        <img className="logo" src={logo} alt="logo" />
        <ul className="links">
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/blogdetails">Blog Detail </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
