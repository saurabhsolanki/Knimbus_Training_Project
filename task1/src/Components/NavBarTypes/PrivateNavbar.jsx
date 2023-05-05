import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Logout from "../Logout";

const PrivateNavbar = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container className="p-1">
          <Nav.Link>
            <Link to="/home" className="text-decoration-none text-light">
              Home Page
            </Link>
          </Nav.Link>

          <>
            <Logout />
          </>
        </Container>
      </Navbar>
    </div>
  );
};

export default PrivateNavbar;
