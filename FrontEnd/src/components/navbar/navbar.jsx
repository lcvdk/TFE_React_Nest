import React from "react";
import myLogo from "../../assets/Lookastoo-logo-blue_60px.png";
import { Container } from "react-bootstrap";
import { NavLink } from 'react-router-dom'




const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Container>
          <NavLink to=''><img src={myLogo} alt="logo" /></NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <ul className="navbar-nav ">
            
            <li className="nav-item">
                <NavLink className="nav-link text-primary"  to='/boardgames'>Boardgames</NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link text-primary" to='/players'>Players</NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link text-primary" to='/contact'>Contact</NavLink>
              
            </li>
          
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
