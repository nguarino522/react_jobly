import React from "react";

import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="m-3" href="/">My Website</Navbar.Brand>
      {/* <Nav className="mr-auto p-3">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav> */}
      <Nav className="ms-auto p-3">
        <Nav.Link href="/companies">Companies</Nav.Link>
        <Nav.Link href="/jobs">Jobs</Nav.Link>
        <Nav.Link href="/profile">Profile</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/signup">SignUp</Nav.Link>
        <Nav.Link href="/">Logout</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;