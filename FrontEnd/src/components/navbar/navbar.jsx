import React from "react";
import myLogo from "../../assets/Lookastoo-logo-blue_60px.png";
import { Container } from "react-bootstrap";
import { NavLink } from 'react-router-dom'




const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Container>
        {/* <a className="navbar-brand" href="#"> */}
          
          <NavLink to=''><img src={myLogo} alt="logo" /></NavLink>
        {/* </a> */}
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
          
          <ul className="navbar-nav ml-auto">
            
            <li className="nav-item">
              {/* <a className="nav-link" href="#"> */}
                <NavLink className="nav-link text-primary"  to='/boardgames'>Boardgames</NavLink>
              {/* </a> */}
            </li>

            <li className="nav-item">
              {/* <a className="nav-link" href="#"> */}
                <NavLink className="nav-link text-primary" to='/players'>Players</NavLink>
              {/* </a> */}
            </li>

            <li className="nav-item">
              {/* <a className="nav-link" href="#"> */}
                <NavLink className="nav-link text-primary" to='/contact'>Contact</NavLink>
              {/* </a> */}
            </li>
          
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
