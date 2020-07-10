import React from "react";
import { Navbar, Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const CustomNavbar = (props) => {
  const { history } = props;
  const { loginWithPopup, logout, user } = useAuth0();
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
    logout()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Navbar bg="dark" variant="dark" className="justify-content-between">
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
      {user ? (
        <Button
          variant="danger"
          onClick={() => {
            handleLogout();
          }}>
          Logout
        </Button>
      ) : (
        <Button
          variant="outline-primary"
          onClick={() => {
            handleAuth();
          }}>
          Login
        </Button>
      )}
      <Button
        variant="danger"
        onClick={() => {
          console.log(user);
        }}>
        USER
      </Button>
    </Navbar>
  );
};

export default CustomNavbar;
