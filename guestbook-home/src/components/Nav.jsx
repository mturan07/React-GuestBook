import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">Guestbook Entries</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <Link to="/">
            <li className="nav-item">
              <span className="nav-link">Home</span>
            </li>
          </Link> 
          <Link to="/new">
            <li className="nav-item">
              <span className="nav-link">New Entry</span>
            </li>
          </Link>
          <Link to="/about">
            <li className="nav-item">
              <span className="nav-link">About</span>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;