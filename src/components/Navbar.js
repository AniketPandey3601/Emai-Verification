import React  from "react";
import PropTypes from 'prop-types';
import photo2 from "../email1.jpg";
import { Link } from "react-router-dom";



export default function Navbar(props) {
  return (
    <nav
      className={` navbar navbar-expand-lg  navbar-custom navbar-dark bg-dark  `}
    >
      <div className="container-fluid">
        <img src={photo2} alt="" width="50" height="50" />
        <a className="navbar-brand" href="/">
          EMAIL-VERIFICATION
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                {" "}
                About Us
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li> */}
          </ul>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "light" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.togglemode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.msg}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {title: PropTypes.string}

// navbar-${props.mode} bg-${props.mode}