import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="backgroundImage">
      <Container>
        <div className="text-center pt-5">
          <div className="text-center">
            <h1>Not found</h1>
          </div>
          <h2>sorry page not found</h2>
          <p className="mt-5">
            The Page you are looking for was not here or has been removed
          </p>

          <NavLink to="/landing"> Back to Landing page </NavLink>
        </div>
      </Container>
    </div>
  );
};

export default ErrorPage;
