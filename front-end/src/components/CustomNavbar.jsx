import React from "react";
import { Navbar } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/home">
        <img
          alt="Logo"
          src="/favicon.ico"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        {` My App`}
      </Navbar.Brand>
    </Navbar>
  );
};

export default CustomNavbar;
