import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa"; // Import the user icon from react-icons
import Searchbox from "./Searchbox";

const NavBar = () => {
  const navBarStyles = {
    backgroundColor: "black",
    color: "white",
    border: "none",
  };

  return (
    <div style={navBarStyles}>
      <Navbar expand="lg" style={navBarStyles}>
        <Container style={navBarStyles}>
          <Navbar.Brand style={navBarStyles} href="/">
            Home
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={navBarStyles}
          />
          <Navbar.Collapse id="basic-navbar-nav" style={navBarStyles}>
            <Nav className="me-auto" style={navBarStyles}>
              <Nav.Link style={navBarStyles}>
                <NavLink style={navBarStyles} to="/add-project">
                  Create Song
                </NavLink>
              </Nav.Link>
            </Nav>
            <Searchbox />
          </Navbar.Collapse>

          <NavLink>     </NavLink>
          <NavLink style={navBarStyles} to="/Account">
          
            <FaUser style={{ marginRight: "10px", marginLeft:"100" }} /> 
          </NavLink>
          
        </Container>
      </Navbar>{" "}
    </div>
  );
};

export default NavBar;
