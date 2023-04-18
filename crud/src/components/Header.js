import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
const Header = () => {
  return (
    <Navbar bg="dark" expand="lg"  >
      <Navbar.Brand href="#home" className="text-white mx-auto">  Logo </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
  );
  };

export default Header;
