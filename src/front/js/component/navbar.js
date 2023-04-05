import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Bark Pals!!</span>
        </Link>
        <div className="ml-auto">
          <div className="row">
            <div className="col">
              <Link to="/Login">
                <button type="button" class="btn btn-primary">
                  Login
                </button>
              </Link>
            </div>
            <div className="col">
              <Link to="/Signup">
                <button type="button" class="btn btn-primary">
                  Signup
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
