import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Searchbox from "./Searchbox";
import styled from "styled-components";

const NavBarContainer = styled.div`
  background-color: black;
  color: white;
  border: none;
`;

const StyledNavbar = styled(Navbar)`
  background-color: black;
  color: white;
  border: none;
`;

const StyledBrand = styled(Navbar.Brand)`
  color: white;
`;

const StyledToggle = styled(Navbar.Toggle)`
  color: white;
`;

const StyledCollapse = styled(Navbar.Collapse)`
  color: white;
`;

const StyledNav = styled(Nav)`
  color: white;
`;



const StyledFaUser = styled(FaUser)`
  margin-right: 10px;
  color:white;
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <StyledNavbar expand="lg">
        <Container>
          <StyledBrand href="/">Home</StyledBrand>
          <StyledToggle aria-controls="basic-navbar-nav" />
          <StyledCollapse id="basic-navbar-nav">
            <StyledNav className="me-auto">
              <StyledBrand href="/add-project">Create</StyledBrand>
            </StyledNav>
            <Searchbox />
            <StyledBrand href>                                              
            
            </StyledBrand>
          </StyledCollapse>

          <NavLink to="/Account">
            <StyledFaUser />
          </NavLink>
        </Container>
      </StyledNavbar>
    </NavBarContainer>
  );
};

export default NavBar;
