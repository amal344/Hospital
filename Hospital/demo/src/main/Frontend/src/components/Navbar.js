import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="header1">
      <div className="header">
        <div className="header-option"></div>
        <h5 className="text">
          H<span>o</span>spital
        </h5>
        <div className="space"></div>
        <div className="nav-2">
          <Link to="/" className="link">
            About us
          </Link>
        </div>
        <div className="nav-2">
          <Link to="/" className="link">
            Departments
          </Link>
        </div>

        <div className="nav-2">
          <Link to="/" className="link">
            Doctors
          </Link>
        </div>
        <div className="nav-2">
          <Link to="/" className="link">
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
