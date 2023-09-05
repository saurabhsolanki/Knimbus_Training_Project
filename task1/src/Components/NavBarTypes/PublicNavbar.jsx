import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import MultiLanguage from '../Language/MultiLanguage';

const PublicNavbar = () => {
  return (
    <div>
      <Navbar bg="secondary " expand="lg">
      <Container className="">
        <Navbar.Brand>
          <Link to="/landing" className="text-decoration-none text-light">
            Landing Page
          </Link>
        </Navbar.Brand>

        <div>
              <MultiLanguage/>

        </div>

        <Navbar.Toggle aria-controls="navbarScroll" className=' bg-light border border-0'/>
          <Navbar.Collapse id="navbarScroll" >
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll >
              </Nav>
              <div className='d-flex gap-3'>
                <Link to="/login" className="btn btn-primary ">
                  Login Page
                </Link>
                <Link to="/signup" className="btn btn-primary">
                  Signup Page
                </Link>
              </div>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default PublicNavbar
