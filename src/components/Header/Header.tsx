import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  return (
    <header>
      <div className="profile-page sidebar-collapse">
        <nav 
          className={`navbar navbar-expand-lg fixed-top bg-primary ${isHome ? 'navbar-transparent' : ''}`} 
          {...(isHome ? { 'color-on-scroll': "400" } : {})}
        >
          <div className="container">
            <div className="navbar-translate">
              <Link className="navbar-brand" to="/" rel="tooltip">Nagendra's Portfolio</Link>
              <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
                aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse justify-content-end" id="navigation">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/skills">Skills</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/experience">Experience</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/education">Education</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/certificates">Certificates</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
