import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const PublicNavbar = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
      <Container className="p-1">
        <Nav.Link>
          <Link to="/landing" className="text-decoration-none text-light">
            Landing Page
          </Link>
        </Nav.Link>
            <NavDropdown
              title="Login / Signup"
              id="basic-nav-dropdown"
              className="text-light"
            >
              <NavDropdown.Item>
                <Link to="/login" className="text-decoration-none text-dark">
                  Login Page
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/signup" className="text-decoration-none text-dark">
                  Signup Page
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
      </Container>
    </Navbar>
    </div>
  )
}

export default PublicNavbar
