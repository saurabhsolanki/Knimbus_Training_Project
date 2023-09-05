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
        <Container >
          <Navbar.Brand>
            <Link to="/home" className="text-decoration-none text-light">
              Home
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link
                  to="/viewProduct"
                  className="text-decoration-none text-light"
                >
                  Products
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  to="/item"
                  className="text-decoration-none text-light"
                >
                  Items
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  to="/e-library"
                  className="text-decoration-none text-light"
                >
                  E-Library
                </Link>
              </Nav.Link>
            </Nav>
            <>
              <Logout />
            </>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default PrivateNavbar;
