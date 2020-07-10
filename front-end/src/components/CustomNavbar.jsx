import React from "react";
import { Navbar, Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../assets/images/diamond.svg";
import "../assets/Navbar.css";

const CustomNavbar = (props) => {
  const { history } = props;
  const { loginWithPopup, logout, isAuthenticated } = useAuth0();
  const handleAuth = () => {
    loginWithPopup()
      .then(() => {
        history.push("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleLogout = () => {
    logout();
  };
  return (
    <Navbar className="justify-content-between nav">
      <Navbar.Brand href="/home" className="brand">
        <img alt="Logo" src={logo} width="40" height="40" className="d-inline-block align-top"/>
        {' Treasure Keeper'}
      </Navbar.Brand>
      {isAuthenticated ? (
        <Button
          variant="danger"
          onClick={() => {
            handleLogout();
          }}>
          Logout
        </Button>
      ) : (
        <Button
          variant="primary"
          onClick={() => {
            handleAuth();
          }}>
          Login
        </Button>
      )}
    </Navbar>
  );
};

export default CustomNavbar;
